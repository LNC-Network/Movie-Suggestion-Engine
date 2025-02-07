import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Sample movie data
const imageData = {
  movie1: {
    title: "Movie 1",
    path: "/image/img1.png",
    description: "A great movie",
  },
  movie2: {
    title: "Movie 2",
    path: "/image/img2.png",
    description: "An amazing movie",
  },
  movie3: {
    title: "Movie 3",
    path: "/image/img3.png",
    description: "A must-watch movie",
  },
  movie4: {
    title: "Movie 4",
    path: "/image/img4.png",
    description: "An exciting movie",
  },
};

// Serve the moviePage.html when visiting /image/:id
router.get("/image/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/moviePage.html"));
});

// API route to fetch movie data
router.get("/api/image/:id", (req, res) => {
  const { id } = req.params;
  if (imageData[id]) {
    res.json(imageData[id]); // Send JSON response with movie details
  } else {
    res.status(404).json({ error: "Image not found" });
  }
});

export default router;
