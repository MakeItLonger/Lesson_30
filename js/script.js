'use strict';

window.addEventListener('DOMContentLoaded', function() {
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
    const genre = document.querySelector('.promo__genre');
    const background = document.querySelector('.promo__bg');
    const listMovies = document.querySelector('.promo__interactive-list');
    const inputNewFilm = document.querySelector('.adding__input');
    const form = document.querySelector('form.add');
    const checkbox = document.querySelector('[type="checkbox"]');

    const delAdv = (arr) => {
        arr.forEach( element => element.remove() );
    };

    const someChanges = () => {
        genre.textContent = 'драма';
        background.style.cssText = 'background-image: url("img/bg.jpg")';
    };
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        if (inputNewFilm.value !== '' && inputNewFilm.value.length <= 21) {
            movieDB.movies.push(inputNewFilm.value);
        } else if (inputNewFilm.value !== '' && inputNewFilm.value.length > 21) {
            const shortInputNewFilmStr = inputNewFilm.value.slice(0, 21) + '...';
            movieDB.movies.push(shortInputNewFilmStr);
        }



        if (checkbox.checked) {
            console.log('Добавляем любимый фильм');
        }
        
        createMovieList(movieDB.movies, listMovies);
        e.target.reset();
    });
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        
        films.sort();
    
        films.forEach( (element, number) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${number + 1}. ${element}
            <div class="delete"></div>
        </li>
        `;

        document.querySelectorAll('div.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        })
    });
    }
    delAdv(advImg);
    someChanges();
    createMovieList(movieDB.movies, listMovies);
});












