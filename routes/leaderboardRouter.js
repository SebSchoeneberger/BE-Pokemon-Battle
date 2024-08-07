import { Router } from 'express'
import { createScore, getLeaderboard } from '../controllers/leadeboard.js';
import validateJOI from '../middlewares/validateJOI.js';
import leaderboardJoiSchema from '../joi/joiSchema.js';

const leaderboardRouter = Router();

leaderboardRouter.route('/')
    .get(getLeaderboard)
    .post(validateJOI(leaderboardJoiSchema), createScore);

export default leaderboardRouter;