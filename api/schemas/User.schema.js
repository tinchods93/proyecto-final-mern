const { Schema, model } = require('mongoose');

/**
 * @param  {{type:String}} _id This is also the DNI or Documento Nacional de Identidad (ID CARD)
 * @param  {{type:String}} name
 * @param  {{type:String}} last_name
 * @param  {{type:String}} address
 * @param  {{type:Date}} born_date
 * @param  {{type:Date}} last_dose_date this is not required unless a dose has already been provided
 * @param  {{type:Number}} dose
 * @param  {{type:Date}} next_dose_date this is not required unless a dose has already been provided
 */
const UserSchema = new Schema({
  name: { type: String },
  dni: { type: String },
  last_name: { type: String },
  address: { type: String },
  born_date: { type: Date },
  dose: { type: Number, default: 0 },
  last_dose_date: { type: Date },
  next_dose_date: { type: Date },
});

UserSchema.methods.validateNew = function (obj) {
  const Joi = require('joi');
  const schema = Joi.object({
    dni: Joi.string().min(8).max(10).required(),
    name: Joi.string().min(3).max(100).required(),
    last_name: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(3).max(100).required(),
    born_date: Joi.date().required(),
    dose: Joi.number(),
    last_dose_date: Joi.date(),
    next_dose_date: Joi.date(),
  });
  return schema.validate(obj);
};

UserSchema.methods.validateUpdate = function (obj) {
  const Joi = require('@hapi/joi');
  Joi.objectId = require('joi-objectid')(Joi);

  const schema = Joi.object({
    _id: Joi.objectId().required(),
    dni: Joi.string().min(8).max(10),
    name: Joi.string().min(3).max(100),
    last_name: Joi.string().min(3).max(100),
    address: Joi.string().min(3).max(100),
    born_date: Joi.date(),
    dose: Joi.number(),
    last_dose_date: Joi.date(),
    next_dose_date: Joi.date(),
  });
  return schema.validate(obj);
};

module.exports = model('users', UserSchema);
