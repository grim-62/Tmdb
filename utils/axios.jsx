import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjYzMmQzOGMwMGYyOTZlMGRhNjBhYzBjZWY4NDlkNiIsIm5iZiI6MTcxOTA3NTYyNi41MTQwODgsInN1YiI6IjY2NzZmY2Q4MGFkNzM4ZGM1YjVlNmU5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZmgaSMxUhGHrBaEoZnC0yapTL-qbKKv6IRrIn09rIdI",
  },
});

export default instance;
