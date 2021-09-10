/* Задание на урок:
<<<<<<< HEAD
=======

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
>>>>>>> 6331e9f530e4b9a4f08fe210d388061d70f4b93e

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

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

if (numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
  alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

// 2 +
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

<<<<<<< HEAD
showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const answer = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres.push(answer);
  }
}

writeYourGenres();
=======
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

console.log(personalMovieDB);
>>>>>>> 6331e9f530e4b9a4f08fe210d388061d70f4b93e
