"use strict";

// 1 +
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// 2 +
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// 3 +

const lastMovieSeen = prompt("Один из последних просмотренных фильмов?", "");
const rating = prompt("На сколько оцените его?", "");

const lastMovieSeen2 = prompt("Один из последних просмотренных фильмов?", "");
const rating2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastMovieSeen] = rating;
personalMovieDB.movies[lastMovieSeen2] = rating2;