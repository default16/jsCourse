/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function start() {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      this.count == "" ||
      this.count == null ||
      isNaN(this.count)
    ) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const lastMovieSeen = prompt(
        "Один из последних просмотренных фильмов?",
        ""
      );
      const rating = prompt("На сколько оцените его?", "");

      if (
        lastMovieSeen != null &&
        rating != null &&
        lastMovieSeen != "" &&
        rating != "" &&
        lastMovieSeen.length < 50
      ) {
        personalMovieDB.movies[lastMovieSeen] = rating;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectPersonalLevel: function detectPersonalLevel() {
    if (this.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count <= 30) {
      alert("Вы классический зритель");
    } else if (this.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },

  showMyDB: function showMyDB() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
      const answer = prompt(`Ваш любимый жанр под номером ${i}`);

      if (answer != null && answer != "") {
        personalMovieDB.genres.push(answer);
        console.log("Жанр добавлен!");
      } else {
        i--;
        console.log("Ошибка! Не удалось добавить жанр");
      }
    }

    this.genres.forEach(function (item, index) {
      console.log(`Любимый жанр ${index} - это ${item}`);
    });
  },

  toggleVisibleMyDB: function toggleVisibleMyDB() {
    this.privat = !this.privat;
  },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
