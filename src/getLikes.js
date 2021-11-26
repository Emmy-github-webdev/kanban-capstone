import likeCounter from './likeCounter.js';

const getLikes = async () => {
  try {
    const getMealId = async () => {
      try {
        return await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
          .then((response) => response.json())
          .then((json) => json.meals.map((x) => x.idMeal));
      } catch (e) {
        return null;
      }
    };

    const idList = await getMealId();
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Js4xkj6ulHIn50hbAxjn/likes')
      .then((response) => response.json())
      .then((json) => {
        json.forEach((like) => {
          if (idList.includes(like.item_id)) {
            likeCounter(like);
          }
        });
      });
  } catch (e) {
    return null;
  }
};
export { getLikes as default };
