/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
document.querySelector('.promo__adv-title').remove();
const promo = document.querySelector('.promo__adv');
 let img = promo.querySelectorAll('img');
 img.forEach(item => {
     item.remove();
 });
 // 2
 document.querySelector('.promo__genre').textContent = 'ДРАМА';
 // 3
document.querySelector('.promo__bg').style.cssText = 'background: url(../project/img/bg.jpg) center center / cover no-repeat';
// 4, 5
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `<li className="promo__interactive-item">${i+1}. ${item}
        <div className="delete"></div>
    </li>`;
});