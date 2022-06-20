const Movie = require("./utils");
const input = process.argv;
const movies = [];

if (input[2] === "add") {
  const movieObj = new Movie(input[3], input[4]);
  movieObj.add();
}
