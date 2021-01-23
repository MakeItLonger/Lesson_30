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

//task #1

const advImg = document.querySelectorAll('.promo__adv img');

advImg.forEach( element => element.remove() );

//task #2

const genre = document.querySelector('.promo__genre');

genre.textContent = 'драма';

//task #3

const background = document.querySelector('.promo__bg');

// background.setAttribute( 'style', 'background-image: url("img/bg.jpg")' );

// background.style.backgroundImage = 'url("img/bg.jpg")';

background.style.cssText = 'background-image: url("img/bg.jpg")';






