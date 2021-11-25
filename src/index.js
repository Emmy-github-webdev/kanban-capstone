/* eslint-disable import/no-cycle */
import './css/styles.css';
import Logo from './resources/meal-logo.png';
import getMeals from './getMeals.js';
import getLikes from './getLikes.js';

const logoLink = document.getElementById('logo');
logoLink.src = Logo;

document.addEventListener('DOMContentLoaded', getMeals());
document.addEventListener('DOMContentLoaded', getLikes());
