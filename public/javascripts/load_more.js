document.addEventListener("DOMContentLoaded", () => {
  const movieGrid = document.getElementById("movieGrid");
  const loadMoreTrigger = document.getElementById("loadMoreTrigger");

  // Intersection Observer to detect when user reaches bottom
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMoreMovies();
      }
    },
    { rootMargin: "100px" }
  );

  observer.observe(loadMoreTrigger);

  function loadMoreMovies() {
    for (let i = 0; i < 5; i++) {
      const newMovie = document.createElement("li");
      newMovie.className = "movie-card";
      newMovie.innerText = `Movie ${movieGrid.children.length + 1}`;
      movieGrid.appendChild(newMovie);
    }
  }
});
