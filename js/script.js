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

const advImg = document.querySelectorAll('.promo__adv img');

advImg.forEach( element => element.remove() );

const genre = document.querySelector('.promo__genre');

genre.textContent = 'драма';

const background = document.querySelector('.promo__bg');

background.style.cssText = 'background-image: url("img/bg.jpg")';

const listMovies = document.querySelector('.promo__interactive-list');

listMovies.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach( (element, number) => {
    listMovies.innerHTML += `
    <li class="promo__interactive-item">${number + 1}. ${element}
        <div class="delete"></div>
    </li>
    `;
} );







