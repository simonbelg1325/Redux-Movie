import '../css/style.scss';
import form from './components/SearchForm';
import filter from './components/Filter';
import movies from './components/Movies';

form(document.querySelector('.container__form'));
filter(document.querySelector('.container__sections'));
movies(document.querySelector('.container__sections'));
