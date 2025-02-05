const joi = require("joi");
const { SOMETHING_WENT_WRONG } = require("../../constants/errorMessages");

const createChallenge = async (req, res, next) => {
  const schema = joi.object().strict().keys({
    title: joi.string().required(),
    level: joi.string().required(),
    start_date: joi.number().required(),
    end_date: joi.number().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    logger.error(`Error validating createChallenge payload : ${error}`);
    res.boom.badRequest(error.details[0].message);
  }
};

const subscribeToChallenge = async (req, res, next) => {
  const schema = joi.object().strict().keys({
    userId: joi.string().required(),
    challengeId: joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    logger.error(`Error validating subscribeToChallenge payload : ${error}`);
    res.boom.badRequest(SOMETHING_WENT_WRONG);
  }
};

module.exports = {
  createChallenge,
  subscribeToChallenge,
};
