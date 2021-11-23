class Meals {
  static showDish = (meal) => {
    const board = document.getElementById('board');
    const dish = document.createElement('div');
    dish.className = 'col-4 card d-flex align-content-around';
    dish.innerHTML = `<img src=${meal.strMealThumb} alt="${meal.strMeal}">
        <div class="d-flex align-baseline py-2">
          <h2 class="col-9">${meal.strMeal}</h2>
          <p class="col-3">Likes: 0</p>
        </div>

        <input type="submit" name="comments" id="${meal.idMeal}" value="Comments"
          class="btn comment text-light btn-block my-2 ">
        <input type="submit" name="reservations" id="reservation-0" value="Reservations"
          class="btn reserve  text-light my-2 btn-block">
    `;
    board.appendChild(dish);
  };

  static showBoard = (list) => {
    list.forEach((dish) => {
      Meals.showDish(dish);
    });
  };
}
export { Meals as default };
