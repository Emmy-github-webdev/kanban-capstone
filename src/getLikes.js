// import likeCounter from './likeCounter.js';

const getLikes = async () => {
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/{{appID}}/likes')
      .then((response) => response.json())
      .then((json) => {
        json.meals.forEach((meal) => {
          // likeCounter(meal.id);
          console.log(meal);
        });
      });
  } catch (e) {
    return null;
  }
};
export { getLikes as default };
