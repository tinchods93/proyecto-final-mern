const express = require('express');
const router = express.Router();
const {
  newAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointments.controller');

router.post('/', newAppointment);
router.get('/', getAppointments);
router.patch('/', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;
