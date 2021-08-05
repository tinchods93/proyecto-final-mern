const Vaccinations = require('../schemas/Vaccination.schema');
const uuid = require('uuid');

const getVaccinationPlaces = async (req, res) => {
  const vaccinationPlaces = await Vaccinations.find().catch((e) =>
    console.log('ERROR IN getVaccinationPlaces =>', e)
  );

  vaccinationPlaces.length
    ? res.json(vaccinationPlaces)
    : res.status(404).send({ message: 'NOT_FOUND' });
};

const getVaccinationPlaceById = async (req, res) => {
  if (!req.params.id) res.status(400).send({ message: 'BAD_REQUEST' });

  const vaccinationPlaces = await Vaccinations.findById(req.params.id).catch(
    (e) => console.log('ERROR IN getVaccinationPlaceById =>', e)
  );

  vaccinationPlaces
    ? res.json(vaccinationPlaces)
    : res.status(404).send({ message: 'NOT_FOUND' });
};

const newVaccinationPlace = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    res.status(400).send({ message: 'BAD_REQUEST' });
  const newPlace = new Vaccinations(req.body);

  //Body Validation with joi
  const { error: _error } = newPlace.joiValidateNew(req.body);
  if (_error) {
    res.status(400).send({ message: 'INVALID_BODY' });
    return;
  }
  newPlace._id = uuid.v4();

  await newPlace
    .save()
    .catch((e) => console.log('ERROR SAVING NEW VACCINE PLACE =>', e));
  res.send({ message: 'Vaccine Place Saved', body: newPlace });
};

const updateVaccinationPlace = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    res.status(400).send({ message: 'BAD_REQUEST' });

  const updateBody = new Vaccinations(req.body);

  //Body Validation with joi
  const { error: _error } = updateBody.joiValidate(req.body);

  if (_error) {
    res.status(400).send({ error: 'INVALID_BODY', message: 'ID IS REQUIRED' });
    return;
  }
  delete updateBody._id;

  const updated = await Vaccinations.findByIdAndUpdate(req.body._id, updateBody)
    .then((a) => a)
    .catch((e) => console.log('ERROR UPDATING VACCINE PLACE =>', e));

  if (!updated) {
    res.status(404).send({ message: 'NOT_FOUND' });
    return;
  }
  res.send({ message: 'Update process successfull' });
};

const deleteVaccinationPlace = async (req, res) => {
  if (!req.params.id) res.status(400).send({ message: 'BAD_REQUEST' });
  console.log('PASO');

  const deleted = await Vaccinations.findByIdAndDelete(req.params.id)
    .then((a) => a)
    .catch((e) => {
      console.log('ERROR DELETING VACCINE PLACE =>', e);
    });

  if (!deleted) {
    res.status(404).send({ message: 'NOT_FOUND' });
    return;
  }

  res.send({ message: 'Delete process successfull' });
};

module.exports = {
  getVaccinationPlaces,
  getVaccinationPlaceById,
  newVaccinationPlace,
  updateVaccinationPlace,
  deleteVaccinationPlace,
};
