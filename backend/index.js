import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import paraphraseRoutes from './routes/paraphraseRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", paraphraseRoutes);

// Production Configuration
if (process.env.NODE_ENV === "production") {
  // Serve static files from the frontend build folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Catch-all route to serve index.html for non-API requests
  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});