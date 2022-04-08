import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData() {

  function getEmptySpots(state) {
    const day = state.days.filter((i) => i.name === state.day)[0];
    const appointments = day.appointments;
    let empty = 0;
    appointments.forEach((i) => {
      if (!state.appointments[i].interview) {
        empty++;
      }
    })
    return empty;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    const appointments = {
      ...state.appointments,
      [id] : appointment
    };
    return axios.put(`/api/appointments/${id}`, {interview})
    .then((resp) => {
      setState((prev) => {
        const spots = getEmptySpots({...prev, appointments});
        let day = prev.days.filter((i) => i.name === prev.day)[0];
        const dayIndex = day.id;
        day = {
            ...day,
            spots: spots
        };
        const days = [...prev.days]
        days[dayIndex - 1] = day;
        return {...prev, appointments, days};
      });
      return resp;
    });
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then((resp) => {
      setState((prev) => {
        const spots = getEmptySpots({...prev, appointments});
        let day = prev.days.filter((i) => i.name === prev.day)
        const dayIndex = day[0].id;
        day = {
            ...day[0],
            spots: spots
        };
        const days = [...prev.days]
        days[dayIndex - 1] = day;
        return {...prev, appointments, days};
      });
      return resp;
    });
  };

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({...state, day});
  
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then((all) => {
        if (all.length === 0) {
          window.location.reload(true);
        }
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      })
    }, []);

    return { bookInterview, cancelInterview, state, setDay};
};
