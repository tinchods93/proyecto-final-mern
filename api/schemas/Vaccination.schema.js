const mongoose = require('mongoose');

const VaccinationSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  dosesInProgress: { type: Array, default: [] },
  dosesCompleted: { type: Array, default: [] },
  url: { type: String },
});

VaccinationSchema.methods.joiValidateNew = function (obj) {
  const Joi = require('joi');
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(3).max(100).required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    dosesInProgress: Joi.array(),
    dosesCompleted: Joi.array(),
    url: Joi.string().uri().allow('').required(),
  });
  return schema.validate(obj);
};

VaccinationSchema.methods.joiValidate = function (obj) {
  const Joi = require('joi');

  const schema = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().min(3).max(100),
    address: Joi.string().min(3).max(100),
    latitude: Joi.number(),
    longitude: Joi.number(),
    dosesInProgress: Joi.array(),
    dosesCompleted: Joi.array(),
    url: Joi.string().uri().allow(''),
  });
  return schema.validate(obj);
};

module.exports = mongoose.model('vaccination-places', VaccinationSchema);
