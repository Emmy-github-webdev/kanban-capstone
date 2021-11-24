// class Meals {
//   static showDish = (meal) => {
//     const board = document.getElementById('board');
//     const dish = document.createElement('div');
//     dish.className = 'col-4 card d-flex align-content-around';
//     dish.innerHTML = `<img src=${meal.strMealThumb} alt="Apple Crumble">
//         <div class="d-flex align-baseline py-2">
//           <h2 class="col-9">${meal.strMeal}</h2>
//           <p class="col-3">Likes: 0</p>
//         </div>

//         <input type="submit" name="comments" id="${meal.idMeal}" value="Comments"
//           class="btn comment text-light btn-block my-2 " >
//         <input type="submit" name="reservations" id="reservation-0" value="Reservations"
//           class="btn reserve  text-light my-2 btn-block">
//     `;
//     board.appendChild(dish);
//   };

//   static showBoard = (list) => {
//     list.forEach((dish) => {
//       Meals.showDish(dish);
//     });
//   };

//   hello
// }
// export { Meals as default };

const board = document.querySelector('#board');
const mealDetailsContent = document.querySelector('.meal-details-content');
const closeBtn = document.querySelector('.recipe-close-btn');

const mealBoard = async (data) => {
  
  for (let i = 0; i <= data.length - 1; i += 1) {
    const boardDiv = document.createElement('div');
    boardDiv.classList.add('meal-result');

    const listMeals = document.createElement('div');
    listMeals.id = data[i].idMeal;
    boardDiv.setAttribute('data-id', `${data[i].idMeal}`);
    listMeals.classList.add('meal-item');

    const mealImage = document.createElement('div');
    mealImage.classList.add('meal-img');

    const Image = document.createElement('img');
    Image.classList.add('meal-img-img')
    Image.src = data[i].strMealThumb;

    mealImage.appendChild(Image);
    listMeals.appendChild(mealImage);

    const mealText = document.createElement('div');
    mealText.classList.add('meal-name', 'justify-content-center', 'align-items-center');

    const mealName = document.createElement('h3');
    mealName.classList.add('meal-name-h3');
    mealName.innerHTML = data[i].strMeal;

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fas', 'fa-thumbs-up', 'like-btn');
    likeBtn.id = data[i].idMeal;

    mealText.appendChild(mealName);
    mealText.appendChild(likeBtn);
    listMeals.appendChild(mealText);

    const mealLikes = document.createElement('div');
    const numOfLikes = document.createElement('small');
    numOfLikes.innerHTML = '0 likes';
    mealLikes.appendChild(numOfLikes);
    listMeals.appendChild(mealLikes);

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');

    const button = document.createElement('button');
    button.classList.add('btn', 'comment-btn');

    button.innerHTML = 'comments';

    commentContainer.appendChild(button);
    listMeals.appendChild(commentContainer);

    boardDiv.appendChild(listMeals)
    board.appendChild(boardDiv);
  }
}

/* Meal pop up modal */
const mealPopUp = async (meal) => {
  [meal] = meal;
  mealDetailsContent.innerHTML = `

    <div class = "recipe-meal-img">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}>
      <img src = "${meal.strMealThumb ? meal.strMealThumb : `https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg`}" alt = "food">
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
}

const getSingleMeal = async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('comment-btn')) {
    const mealItem = e.target.parentElement.parentElement.parentElement;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;
    const response = await fetch(url).then((response) => response.json()).then((data) => data);
    mealPopUp(response.meals);
  }
};

board.addEventListener('click', getSingleMeal);

closeBtn.addEventListener('click', () => {
  mealDetailsContent.parentElement.classList.remove('displayComment');
});

export default mealBoard;