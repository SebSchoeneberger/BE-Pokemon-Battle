import { Router } from 'express'
import { createScore, getLeaderboard, getUser } from '../controllers/leadeboard.js';
import validateJOI from '../middlewares/validateJOI.js';
import leaderboardJoiSchema from '../joi/joiSchema.js';

const leaderboardRouter = Router();

leaderboardRouter.route('/')
    .get(getLeaderboard)
    .post(validateJOI(leaderboardJoiSchema), createScore);

leaderboardRouter.route('/user').post(getUser)

export default leaderboardRouter;