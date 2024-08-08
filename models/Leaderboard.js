import mongoose from "mongoose";
const { Schema, model } = mongoose;

const leaderboardSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
    favPokemon: {
        type: String,
    },
    avatar: {
        type: String,
    },
    score: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

const Leaderboard = model('Leaderboard', leaderboardSchema);
export default Leaderboard;