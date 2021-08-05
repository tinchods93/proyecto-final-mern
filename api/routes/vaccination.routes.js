const express = require('express');
const router = express.Router();
const {
  getVaccinationPlaces,
  getVaccinationPlaceById,
  newVaccinationPlace,
  updateVaccinationPlace,
  deleteVaccinationPlace,
} = require('../controllers/vaccination.controller');

router.get('/places', getVaccinationPlaces);
router.get('/places/:id', getVaccinationPlaceById);
router.post('/places', newVaccinationPlace);
router.patch('/places', updateVaccinationPlace);
router.delete('/places/:id', deleteVaccinationPlace);

module.exports = router;
