const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const VaccinationSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  address: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  url: { type: String },
});

VaccinationSchema.methods.joiValidateNew = function (obj) {
  const Joi = require('joi');
  const schema = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required(),
    address: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    url: Joi.string().required(),
  });
  return schema.validate(obj);
};

VaccinationSchema.methods.joiValidate = function (obj) {
  const Joi = require('joi');
  const schema = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string(),
    address: Joi.string(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    url: Joi.string(),
  });
  return schema.validate(obj);
};

module.exports = mongoose.model('vaccination-places', VaccinationSchema);
