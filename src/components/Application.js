import React from "react";

import "components/Application.scss";

import DayList from 'components/DayList';
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from '../helpers/selectors';
import useApplicationData from 'hooks/useApplicationData';

export default function Application() {

  const { bookInterview, cancelInterview, state, setDay} = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day);
    
  const appointments = getAppointmentsForDay(state, state.day)
    .map((appointmentItem) => {
      return (
        <Appointment
          key={appointmentItem.id} 
          id={appointmentItem.id}
          time={appointmentItem.time}
          interview={getInterview(state, appointmentItem.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    })

  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList 
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
