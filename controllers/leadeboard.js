import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Leaderboard from "../models/Leaderboard.js";

export const getLeaderboard = asyncHandler(async(req, res, next) => {
  const leaders = await Leaderboard.find();
  res.json(leaders);
});

export const createScore = asyncHandler(async(req, res, next) => {
  const { username, score } = req.body;

  const found = await Leaderboard.findOne({ username });

  if (found) {
    const update = await Leaderboard.findOneAndUpdate({ username }, { score }, { new: true } )
    res.json(update);
  } else {
    const newScore = await Leaderboard.create({ username, score });
    res.json(newScore);
  }

});
