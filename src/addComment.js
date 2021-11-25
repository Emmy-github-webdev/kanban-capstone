const addComment = async (data) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hM8vrlzdwqrlgb4w96Yn/comments';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

export default addComment;