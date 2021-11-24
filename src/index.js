/* eslint-disable import/no-cycle */
import './css/styles.css';
import Logo from './resources/meal-logo.png';
import getMeals from './getMeals.js';
import mealBoard from './Meals.js'

const logoLink = document.getElementById('logo');
logoLink.src = Logo;

// document.addEventListener('DOMContentLoaded', getMeals());

window.addEventListener('load', async () => {
  mealBoard(await getMeals());
});
