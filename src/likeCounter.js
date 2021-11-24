const likeCounter = (item) => {
  const likes = document.getElementById(`${item.item_id}`);
  likes.innerHTML = `&#10084;&#65039; (${item.likes})`;
};

export { likeCounter as default };