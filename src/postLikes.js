const postLikes = async (id) => {
  const newLike = { item_id: `${id}` };
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Js4xkj6ulHIn50hbAxjn/likes', {
      method: 'POST',
      body: JSON.stringify(newLike),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  } catch (e) {
    return null;
  }
};

export { postLikes as default };
