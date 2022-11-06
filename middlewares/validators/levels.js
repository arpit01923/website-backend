const Joi = require("joi");

const validateLevelBody = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim().required(),
    createdBy: Joi.string().required(),
    date: Joi.date().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    logger.error(`Error validating createLevel payload : ${error}`);
    res.boom.badRequest(error.details[0].message);
  }
};

module.exports = {
  validateLevelBody,
};
