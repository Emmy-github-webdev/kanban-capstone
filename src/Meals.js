const board = document.querySelector('#board');
const mealDetailsContent = document.querySelector('.meal-details-content');
const closeBtn = document.querySelector('.recipe-close-btn');

class Meals {
  static showDish = (meal) => {
    const board = document.getElementById('board');
    const dish = document.createElement('div');
    dish.className = 'col-4 card d-flex align-content-around';
    dish.innerHTML += `<img src=${meal.strMealThumb} alt="Apple Crumble">
        <div class="d-flex align-baseline py-2">
          <h2 class="col-9">${meal.strMeal}</h2>
          <p class="col-3">Likes: 0</p>
        </div>

        <input type="submit" name="comments" id="${meal.idMeal}" value="Comments"
          class="btn comment text-light btn-block my-2 " >
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

const mealPopUp = async (meal) => {
  [meal] = meal;
  mealDetailsContent.innerHTML = `

    <div class = "recipe-meal-img">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}>
      <img src = "${meal.strMealThumb ? meal.strMealThumb : 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'}" alt = "food">
    </div>
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <p class = "recipe-category">${meal.strCategory}</p>
    <div class = "recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-link">
    <a href="${meal.strYoutube}" target = "_blank">Watch Youtube</a>
    </div>
    <h3 class="m-3 comment-count"></h3>
    <div class="d-flex justify-content-center align-items-center">
      <ul id="list-comment" class="list-unstyled">
      </ul>
    </div>
    <h3 class="m-3">Add a comment</h3>
    <form autocomplete="off" class="form-class">
      <input type="text" class="form-control" id="commentator" placeholder="Your name">
      <textarea id="comment" name="comment" cols="30" rows="10" placeholder="Your comment..."></textarea>
      <button type="button" class="btn commentBtn">Comment</button>
    </form>
    
  `;

  mealDetailsContent.parentElement.classList.add('displayComment');
};

const getSingleMeal = async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('comment')) {
    const { id } = e.target;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    mealPopUp(data.meals);
  }
};

board.addEventListener('click', getSingleMeal);

closeBtn.addEventListener('click', () => {
  mealDetailsContent.parentElement.classList.remove('displayComment');
});

export { Meals as default };
