import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Leaderboard from "../models/Leaderboard.js";

export const getLeaderboard = asyncHandler(async (req, res, next) => {
  const leaders = await Leaderboard.find();
  res.json(leaders);
});

export const createScore = asyncHandler(async (req, res, next) => {
  const { username, score, country, favPokemon, avatar } = req.body;

  const found = await Leaderboard.findOne({ username });

  if (found) {
    const update = await Leaderboard.findOneAndUpdate(
      { username },
      { score },
      { new: true }
    );
    res.json(update);
  } else {
    const newScore = await Leaderboard.create({ username, country, favPokemon, avatar, score });
    res.json(newScore);
  }
  
});

export const getUser = asyncHandler( async (req, res, next) =>{

  const { username } = req.body;

  const user = await Leaderboard.findOne({ username });
  res.json(user);
})
