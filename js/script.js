'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastMovieSeen = prompt("Один из последних просмотренных фильмов?", "");
    const rating = prompt("На сколько оцените его?", "");
  
    if (lastMovieSeen != null && rating != null && lastMovieSeen != '' && rating != '' && lastMovieSeen.length < 50) {
      personalMovieDB.movies[lastMovieSeen] = rating;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель');
  } else if (numberOfFilms > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const answer = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres.push(answer);
  }
}

writeYourGenres();

