/* eslint-disable import/no-cycle */
import './css/styles.css';
import Logo from './resources/meal-logo.png';
<<<<<<< HEAD
import MealPhoto from './resources/food.jpg';
const logoLink = document.getElementById('logo');
logoLink.src = Logo;
const MealImg = document.getElementById('recipe-img');
MealImg.src = MealPhoto;
const mealDetailsContent = document.querySelector('.meal-details');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

recipeCloseBtn.addEventListener('click', () => {
  mealDetailsContent.style.display = 'none';
});
=======
import getMeals from './getMeals.js';

const logoLink = document.getElementById('logo');
logoLink.src = Logo;

document.addEventListener('DOMContentLoaded', getMeals());
>>>>>>> 9db71c747ca3ac7f973892f8ccb261476dc2bbad
