import Joi from 'joi';

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
      id: Joi.string()
      .min(3)
      .required(),
      username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(3)
      .required(),
    gender: Joi.string().required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    date_of_birth: Joi.date().required(),
    phone: Joi.string()
      .min(11)
      .max(11)
      .required(),
  });
  return schema.validate(user);
}

export function validateUserLogin(user) {
  const schema = Joi.object({
    password: Joi.string()
      .min(6)
      .max(255)
      .required(),
    username: Joi.string().required(),
  });
  return schema.validate(user);
}

