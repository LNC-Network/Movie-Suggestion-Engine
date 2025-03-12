import db from "./database.js"; // Import the database connection

export function GetMovieSuggestion(req, res) {
  db.all("SELECT * FROM movies", (err, rows) => {
    if (err) {
      console.error("Error fetching movies:", err);
      res.status(500).json({ error: "Failed to fetch movies from database." });
      return;
    }

    if (rows.length === 0) {
      res.status(404).json({ message: "No movies found in the database." });
      return;
    }

    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomMovie = rows[randomIndex];

    res.json(randomMovie);
  });
}
