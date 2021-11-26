import getLikes from './getLikes.js';
import postLikes from './postLikes.js';
import addComment from './addComment.js';
import commentCounter from './commentCounter.js';

const board = document.querySelector('#board');
const mealDetailsContent = document.querySelector('.meal-details-content');
const closeBtn = document.querySelector('.recipe-close-btn');

class Meals {
  static showDish = (meal) => {
    const board = document.getElementById('board');
    const dish = document.createElement('div');
    dish.className = 'col-md-4 col-sm-6 col-xs-6 card d-flex my-1 p-4';
    dish.innerHTML = `<img src=${meal.strMealThumb} alt="${meal.strMeal}">
        <div class="d-flex align-baseline justify-content-between py-2">
          <h2 class="col-9">${meal.strMeal}</h2>
          <div class="col-3 text-decoration-none text-reset counter" id=${meal.idMeal}>&#10084;&#65039; 0</div>
        </div>

        <input type="submit" name="comments" id="${meal.idMeal}" value="Comments"
          class="btn comment text-light btn-block my-2 " >
        <input type="submit" name="reservations" id="reservation-0" value="Reservations"
          class="btn reserve  text-light my-2 btn-block">
    `;
    board.appendChild(dish);
    document.getElementById(meal.idMeal).addEventListener('click', () => {
      Meals.getRecipe(meal.idMeal);
    });
  };

  static showBoard = (list) => {
    const mealBoard = document.getElementById('board');
    list.forEach((dish) => {
      Meals.showDish(dish);
    });
    mealBoard.addEventListener('click', (e) => {
      if (e.target.classList.contains('counter')) {
        postLikes(e.target.id);
        setTimeout(() => {
          getLikes();
        }, 1000);
      }
    });
  };
}

const getComment = async (item) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hM8vrlzdwqrlgb4w96Yn/comments?item_id=${item.idMeal}`;
  const myComment = await fetch(url);
  let data = await myComment.json();
  const ul = document.querySelector('#list-comment');
  ul.innerHTML = '';
  const h3 = document.querySelector('.comment-count');
  h3.innerHTML = `Comments(${commentCounter(data)})`;
  if (!data.length) data = [];
  data.forEach((comment) => {
    ul.innerHTML += `
      <li class="comment-list d-flex justify-content-start align-items-center">
        <p class="me-3">${comment.creation_date}</p>
        <p class="me-3">${comment.username}</p>
        <p>${comment.comment}</p>
      </li>
    `;
  });
};

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
      <input type="text" class="form-control" id="commentator" required placeholder="Your name">
      <textarea id="comment" name="comment" cols="30" rows="10" required placeholder="Your comment..."></textarea>
      <button type="button" class="btn commentBtn">Comment</button>
    </form>

  `;

  mealDetailsContent.parentElement.classList.add('displayComment');
  const commentBtn = document.querySelector('.commentBtn');
  commentBtn.addEventListener('click', () => {
    const username = document.querySelector('#commentator').value;
    const comment = document.querySelector('#comment').value;

    const mealId = meal.idMeal;
    if (username !== '' && comment !== '') {
      const newComment = {
        item_id: mealId,
        username,
        comment,
      };
      addComment(newComment);
    } else alert('Empty fields are not allowed');
    document.querySelector('#commentator').value = '';
    document.querySelector('#comment').value = '';
    setTimeout(() => {
      getComment(meal);
    }, 1000);
    getComment(meal);
  });
  getComment(meal);
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
