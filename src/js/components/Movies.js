import { store } from '../store/store';

class Movies {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.render();
    store.subscribe(this.render.bind(this));
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `
      <div class="container__sections__movies">
        <p class="container__sections__movies__text">movies matching your search on ' <span></span> '</p>
        <div class="container__sections__movies__list"></div>
      </div>
    `
    );
    return this._holder.querySelector('.container__sections__movies');
  }

  render() {
    this._domRef.querySelector('span').innerHTML = store.getState().search;
    const movieArr = store.getState().movies;
    this._domRef.querySelector('.container__sections__movies__list').innerHTML =
      '';
    this._domRef.querySelector(
      '.container__sections__movies__list'
    ).innerHTML = Object.keys(movieArr)
      .filter(el => {
        if (store.getState().filter.movie && movieArr[el].Type === 'movie') {
          return true;
        }
        if (store.getState().filter.series && movieArr[el].Type === 'series') {
          return true;
        }
        if (store.getState().filter.game && movieArr[el].Type === 'game') {
          return true;
        }
        if (
          store.getState().filter.episode &&
          movieArr[el].Type === 'episode'
        ) {
          return true;
        }
        return false;
      })
      .filter(el => {
        if (store.getState().filter.year === 0) {
          return true;
        }
        if (store.getState().filter.year === '') {
          return store.getState().movies;
        }
        return store.getState().filter.year === movieArr[el].Year;
      })
      .filter(el => {
        if (store.getState().filter.poster) {
          return movieArr[el].Poster !== 'N/A';
        }
        return true;
      })
      .map(
        el => `<div class="container__sections__movies__card">
            <img src="${movieArr[el].Poster}">
            <h3 class="container__sections__movies__card__header">${
              movieArr[el].Title
            }</h3>
            <p class="container__sections__movies__card__year">${
              movieArr[el].Year
            }
          </div>
          `
      )
      .join('');
  }
}

export default function movies(holder) {
  return new Movies(holder);
}
