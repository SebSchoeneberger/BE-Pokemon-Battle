import express from 'express'
import cors from 'cors';
import './db/index.js';
import leaderboardRouter from './routes/leaderboardRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.use(express.json());

app.use("/leaderboard", leaderboardRouter);
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
