const films = [
  {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
  },
  {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search forVoldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
  },
  {
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    country: "United States, United Kingdom",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
  },
  {
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
    country: "United Kingdom",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, Warner Brothers",
  },
];

//1
// const getUniqueGenreOfMovies = (films) => {
//     const allGenres = films.reduce((result, { genre }) => {
//       return result.concat(genre);
//     }, []);

//     const uniqueMoviesSet = new Set(allGenres);
//     // console.log(uniqueMoviesSet);

//     return Array.from(uniqueMoviesSet).sort();
//   };

//   const uniqueGenreOfMovies = getUniqueGenreOfMovies(films);
//   console.log(uniqueGenreOfMovies);

////////////

// const genres = films.concat.apply([], films.map(movie => movie.genre));
// const genresWithoutDuplicates = genres.filter((genre, index) => genres.indexOf(genre) === index);
// console.log(genresWithoutDuplicates);
//////

// !!!
// const genres = films.reduce((acc, film) => {
//   film.genre.forEach((genre) => {
//     if (!acc.includes(genre)) {
//       acc.push(genre);
//     }
//   });
//   return acc;
// }, []);
// console.log(genres);
//////
// !!!
// function getGenre(films){
// return [...new Set(films.flatMap(film => film.genre))];
// }

//2
const actors = films.reduce((acc, film) => {
  film.actors.forEach((actor) => {
    if (!acc.includes(actor)) {
      acc.push(actor);
    }
  });
  return acc;
}, []);
console.log(actors);

// !!!
// function getActors(films){
//     return [...new Set(films.flatMap(film => film.actors))];
// }
// !!!

//3
const sortedFilms = films.sort((a, b) => b.imdbRating - a.imdbRating);
console.log(sortedFilms);

//////

// const ratingOfMovies = films.sort((a, b) => a.imdbRating > b.imdbRating ? -1 : 1);
// console.log(ratingOfMovies);

//4
const newFilms = films.map((film) => ({
  id: film.id,
  title: film.title,
  released: film.released,
  plot: film.plot,
}));
console.log(newFilms);

//5
function filterByYear(films, year) {
  return films.filter((film) => film.year === year);
}

console.log(filterByYear(films, 2011));

//6
function filterByTitle(films, title) {
  return films.filter((film) => film.title.includes(title));
}

console.log(filterByTitle(films, "Harry"));

//7
function filterByTitleOrPlot(films, query) {
  return films.filter(
    (film) => film.title.includes(query) || film.plot.includes(query)
  );
}

console.log(filterByTitleOrPlot(films, "Voldemort"));

//8
function filterByField(films, field, value) {
  return films.filter((film) => film[field] === value);
}

console.log(filterByField(films, "title", "Black Widow"));
console.log(filterByField(films, "year", 2011));

class FilmManager {
  constructor(films) {
    this.films = films;
  }

  getUniqueGenres() {
    return [...new Set(this.films.flatMap((film) => film.genre))];
  }

  getUniqueActors() {
    return [...new Set(this.films.flatMap((film) => film.actors))];
  }

  sortByRating() {
    return this.films.sort((a, b) => b.imdbRating - a.imdbRating);
  }

  getFilmDetails() {
    return this.films.map(({ id, title, released, plot }) => ({
      id,
      title,
      released,
      plot,
    }));
  }

  filterByYear(year) {
    return this.films.filter((film) => film.year === year);
  }

  filterByTitle(title) {
    return this.films.filter((film) => film.title.includes(title));
  }

  filterByTitleOrPlot(searchTerm) {
    return this.films.filter(
      (film) =>
        film.title.includes(searchTerm) || film.plot.includes(searchTerm)
    );
  }

  filterByField(field, value) {
    return this.films.filter((film) => film[field] === value);
  }
}

const filmManager = new FilmManager(films);

console.log("Unique genres:", filmManager.getUniqueGenres());
console.log("Unique actors:", filmManager.getUniqueActors());
console.log("Films sorted by rating:", filmManager.sortByRating());
console.log("Film details:", filmManager.getFilmDetails());
console.log("Films released in 2011:", filmManager.filterByYear(2011));
console.log(
  'Films with "Harry Potter" in the title:',
  filmManager.filterByTitle("Harry Potter")
);
console.log(
  'Films with "Hogwarts" in the title or plot:',
  filmManager.filterByTitleOrPlot("Hogwarts")
);
console.log(
  'Films with title "Black Widow":',
  filmManager.filterByField("title", "Black Widow")
);
console.log("Films released in 2009:", filmManager.filterByField("year", 2009));
