import postLikes from './postLikes.js';

class Meals {
  static showDish = (meal) => {
    const board = document.getElementById('board');
    const dish = document.createElement('div');
    dish.className = 'col-3 card d-flex mx-4 my-3 p-4';
    dish.innerHTML = `<img src=${meal.strMealThumb} alt="${meal.strMeal}">
        <div class="d-flex align-baseline justify-content-between py-2">
          <h2 class="col-9">${meal.strMeal}</h2>
          <div class="col-2 text-decoration-none text-reset counter" id=${meal.idMeal}>&#10084;&#65039; 0</div>
        </div>

        <input type="submit" name="comments" id="${meal.idMeal}" value="Comments"
          class="btn comment text-light btn-block my-2 ">
        <input type="submit" name="reservations" id="reservation-0" value="Reservations"
          class="btn reserve  text-light my-2 btn-block">
    `;
    board.appendChild(dish);
    document.getElementById(meal.idMeal).addEventListener('click', () => {
      Meals.getRecipe(meal.idMeal);
    });
    // document.getElementById(`counter-${meal.idMeal}`).addEventListener('click', () => {
    //   getLikes();
    // });
  };

  static showBoard = (list) => {
    const mealBoard = document.getElementById('board');
    list.forEach((dish) => {
      Meals.showDish(dish);
    });
    mealBoard.addEventListener('click', (e) => {
      if (e.target.classList.contains('counter')) {
        postLikes(e.target.id);
      }
    });
  };

  static getRecipe = async (id) => {
    try {
      return await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.meals);
          // createModal(json.meals);
        });
    } catch (e) {
      return null;
    }
  };
}
export { Meals as default };
