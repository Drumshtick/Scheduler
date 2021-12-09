export function getAppointmentsForDay(state, day) {
  const appointmentIDs = [];
  const appointments = [];
  state.days.forEach((dayObj) => {
    if (dayObj.name === day) {
      appointmentIDs.push(...dayObj.appointments);
    }
  });
  appointmentIDs.forEach((id) => {
    const appt = state.appointments[id];
    if (appt) {
      appointments.push(appt);
    }
  });
  return appointments;
}