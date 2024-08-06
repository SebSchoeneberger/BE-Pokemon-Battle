import express from 'express'
import cors from 'cors';
import './db/index.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,POST, DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.use("/leaderboard", (req, res) => {
  console.log('Leaderboard API');
  res.send('Leaderboard API');
});
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
