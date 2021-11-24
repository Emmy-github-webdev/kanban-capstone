// import Meals from './Meals.js';
// const getMeals = async () => {
//   try {
//     return await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
//       .then((response) => response.json())
//       .then((json) => {
//         Meals.showBoard(json.meals);
//       });
//   } catch (e) {
//     return null;
//   }
// };

// export { getMeals as default };

const getMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese',
  );
  const result = await response.json();
  return result.meals;
};

export default getMeals;
