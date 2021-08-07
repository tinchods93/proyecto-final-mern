const Appointment = require('../../schemas/Appointment.schema');
const moment = require('moment');

module.exports = (appointment) => {
  switch (appointment.state_process) {
    case 'IN_PROGRESS':
      appointment.date = moment().add(2, 'days');

      return {
        statusCode: 400,
        body: {
          message: 'User already has an IN PROGRESS appointment.',
          appointment,
        },
      };
    case 'COMPLETED':
      if (user.dose >= 2) {
        return {
          statusCode: 400,
          body: {
            message: 'User already has 2 doses applied.',
            appointment,
          },
        };
      }

      let lastDoseDate = moment(user.last_dose_date);
      let nextDoseDate = moment(user.next_dose_date);

      if (lastDoseDate.diff(nextDoseDate, 'months') > 0) {
        return {
          statusCode: 400,
          body: {
            message: "2 Months hasn't passed since LAST DOSE applied",
            appointment,
          },
        };
      }
      break;
    default:
      break;
  }
  return {
    statusCode: 200,
    body: {},
  };
};
