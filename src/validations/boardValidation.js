import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { BOARD_TYPES } from '~/utils/constants'

const createNew = async (req, res, next) => {
  // default we don't need to custom message in Backend side. It should be done in Frontend, validating and custom message.
  // we just validate data in backend to MAKE SURE the data is correct. Default message will be returned from library.
  // IMPORTANT: VALIDATING DATA IN BACKEND IS A MUST, because this is the endpoint to the database.
  // We should validate in both Frontend and Backend.
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required! (Custom)',
      'string.empty': 'Title is not allowed to be empty (Custom)'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
    type: Joi.string().valid(...Object.values(BOARD_TYPES)).required()
  })

  try {
    // setting abortEarly to false in case there are many errors, return all
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // validate successfully, then move to next Controller
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }

}

export const boardValidation = {
  createNew
}