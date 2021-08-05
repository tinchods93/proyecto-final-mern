const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const VaccinationSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('vaccination-places', VaccinationSchema);
