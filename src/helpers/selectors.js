export function getAppointmentsForDay(state, day) {
  const appointmentIDs = [];
  const appointments = [];
  for (const key in state.days) {
    if (state.days[key].name === day) {
      appointmentIDs.push(...state.days[key].appointments);
    }
  }
  appointmentIDs.forEach((id) => {
    const appt = state.appointments[id];
    if (appt) {
      appointments.push(appt);
    }
  });
  return appointments;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const parsedinterview = {
    'student': interview.student,
    'interviewer': state.interviewers[interview.interviewer] 
  }
  
  return parsedinterview;
}

export function getInterviewersForDay(state, day) {
  const interviewerIDs = [];
  const interviewersObj = [];
  for (const key in state.days) {
    if (state.days[key].name === day) {
      interviewerIDs.push(...state.days[key].interviewers);
    }
  }
  interviewerIDs.forEach((id) => {
    const appt = state.interviewers[id];
    if (appt) {
      interviewersObj.push(appt);
    }
  });
  return interviewersObj;
};