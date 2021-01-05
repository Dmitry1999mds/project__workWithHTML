/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


//МОЙ ХОД РЕШЕНИЯ ПОСТАВЛЕННЫХЗАДАЧ

/* const promoAdv = document.querySelector(".promo__adv"),
      imgs = document.querySelectorAll(".promo__adv > img"),
      genre = document.querySelector(".promo__genre");

imgs.forEach( function(item){
    item.remove();
});

const newGenre = document.createElement('div');

    newGenre.classList.add('promo__genre');

    newGenre.textContent = "ДРАММА";

    genre.replaceWith(newGenre);


const bg = document.querySelector(".promo__bg");


 bg.style.cssText = "background: url('../img/bg.jpg') center top no-repeat ";


 const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Мааку ебал",
        "Ягуар",
        "Афган"
    ]
};
movieDB.movies.sort();
const list = document.querySelector(".promo__interactive-list");


 for ( let i = 0;  i < movieDB.movies.length; i++){
    let film = movieDB.movies[i];

    let bloclLi = document.createElement('li');
    bloclLi.classList.add('promo__interactive-item');

    bloclLi.innerHTML = `${film} ${i + 1}`;

    list.append(bloclLi);
    
    
};  */


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Мааку ебал",
        "Ягуар",
        "Афган"
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = "драма"

console.log( adv);

poster.style.backgroundImage = "url(img/bg.jpg)";

movieList.innerHTML = "";


 movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item} 
            <div class="delete"></div>
        </li>
    `;
}); 






    


