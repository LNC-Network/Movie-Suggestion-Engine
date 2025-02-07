let Geners = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Mystery",
  "Philosophical",
  "Political",
  "Romance",
  "Saga",
  "Satire",
  "Science Fiction",
  "Social",
  "Speculative",
  "Thriller",
  "Urban",
  "Western",
];
let ageGroups = ["Children", "Young Adult", "Adult", "Elderly", "All"];
let languages = ["English", "Hindi", "Spanish", "French", "German", "Chinese"];
let MovieTypes = ["Movie", "Series", "Documentary", "Short Film", "cartoon"];
function getAge(age) {
  if (age < 13) {
    return ageGroups[0];
  }
  if (age < 18) {
    return ageGroups[1];
  }
  if (age < 60) {
    return ageGroups[2];
  }
  return ageGroups[3];
}
function getLanguage() {
  return languages[0];
}
function getMovieType() {
  return MovieTypes[0];
}
function getGener() {
  return Geners[0];
}

function getMovieSuggetion() {
  const age = getAge();
  const language = getLanguage();
  const movieType = getMovieType();
  const gener = getGener();
  return `Suggested ${movieType} in ${language} for ${age} who likes ${gener} genre.`;
}
console.log(getMovieSuggetion());
