"use strict";
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

//Задание 2.
/*
Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
- movies - в это свойство поместить пустой объект
- actors - тоже поместить пустой объект
- genres - сюда поместить пустой массив
- privat - в это свойство поместить boolean(логическое) значение false*/

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'genres': {},
    'actors': [],
    'privat': false
};
// console.log(personalMovieDB);

/*3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }*/

for (let i = 1; i <= 2; i++) {
    let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    let estimation = prompt('На сколько оцените его?', '');
    personalMovieDB['movies'][lastFilm] = estimation;
}
console.log(personalMovieDB);
