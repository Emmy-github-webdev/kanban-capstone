const mealCounter = (length) => {
  const title = document.getElementById('meals');
  title.innerHTML = `Meals (${length})`;
};

export { mealCounter as default };