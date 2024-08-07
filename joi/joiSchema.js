import Joi from "joi";

const leaderboardJoiSchema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    score: Joi.number().integer()
})

export default leaderboardJoiSchema;