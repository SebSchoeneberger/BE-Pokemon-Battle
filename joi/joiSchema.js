import Joi from "joi";

const leaderboardJoiSchema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    country: Joi.string().optional(), 
    favPokemon: Joi.string().optional().max(20), 
    avatar: Joi.string().uri().optional(),
    score: Joi.number().integer()
})

export default leaderboardJoiSchema;