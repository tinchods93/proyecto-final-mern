const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({
  place_id: { type: Schema.Types.ObjectId, ref: 'vaccination-places' },
  user_id: { type: Schema.Types.ObjectId, ref: 'users' },
  date: { type: Date },
  state_process: { type: String },
});

AppointmentSchema.methods.validateNew = function (obj) {
  const Joi = require('joi');
  const schema = Joi.object({
    place_id: Joi.string(),
    user_id: Joi.string(),
    date: Joi.date(),
    state_process: Joi.string(),
  });
  return schema.validate(obj);
};

AppointmentSchema.methods.validateUpdate = function (obj) {
  const Joi = require('@hapi/joi');
  Joi.objectId = require('joi-objectid')(Joi);

  const schema = Joi.object({
    _id: Joi.objectId().required(),
    place_id: Joi.string(),
    user_id: Joi.string(),
    date: Joi.date(),
    state_process: Joi.string(),
  });
  return schema.validate(obj);
};

module.exports = model('appointments', AppointmentSchema);
