/* eslint-disable import/no-cycle */
import './css/styles.css';
import Logo from './resources/meal-logo.png';
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
