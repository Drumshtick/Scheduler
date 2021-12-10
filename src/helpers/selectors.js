export function getAppointmentsForDay(state, day) {
  const appointmentIDs = [];
  const appointments = [];
  // console.log("day in selectors: ", day);
  // console.log("state in selectors: ", state);
  // console.log("typeof: ",typeof state.days)
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
  // console.log("apptIDs in selectors: ",appointmentIDs)
  // console.log("appts in selectors: ",appointments)
  return appointments;
};