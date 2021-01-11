/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


//Мое решение поставленных задач;
'use strict';

/* const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Мааку ебал",
        "Ягуар",
        "Афган",
    ]
};
movieDB.movies.sort();

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      form = document.querySelector('.add'),
      input = form.querySelector('.adding__input'),
      btn = form.querySelector('button'),
      promo = document.querySelector('.promo__interactive'),
      deleteFilm = document.querySelector('.delete'),
      inputLoveFilm = document.querySelector('.checkbox');



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






let watchFilm;

btn.addEventListener('click', () => {
    watchFilm = input.value;
    movieDB.movies.push(watchFilm);
    

    if (watchFilm.length > 10){
        watchFilm = watchFilm.slice(0, 10) + '...';
    };
    
    for( let i = movieDB.movies.length - 1; i < movieDB.movies.length; i++){
        
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${watchFilm} 
            <div class="delete"></div>
        </li>
    `; 
    }
    
    if (inputLoveFilm.checked) {
        console.log('Добавляем любимый фильм');
    }

    
});


//клик на мусорную карзину

promo.addEventListener('click', (e) => {

    if ( e.target.outerHTML == `<div class="delete"></div>`) {
        e.target.parentNode.remove();
    }


});

/* deleteFilm.addEventListener('click', () => {
    console.log('hjgjhgjgh');
}); */


//скрипт выполниться только тогда, когда загрузится DOM-структура;

document.addEventListener('DOMContentLoaded', () => {
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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
          

    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm) {
            if ( newFilm.length > 22 ) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if ( favorite ) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        };

        event.target.reset();// Обновить форму(в данном примере стереть input)

    });
    
    const deleteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };
    
    
    const makeChanges = () => {

        genre.textContent = "драма";

        poster.style.backgroundImage = "url(img/bg.jpg)";
    };

    
    const sortArr = (arr) => {
        arr.sort();
    };

   

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item} 
                    <div class="delete"></div>
                </li>
            `;
        });   

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();;
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }



    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);
});

