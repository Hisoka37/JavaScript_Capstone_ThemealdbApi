const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const id = 'yCqbqc7XvLe9pKWmDo61';

const postComment = async (itemId, name, message) => {
  const response = await fetch(`${baseUrl}/apps/${id}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      comment: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseData = await response.text();
  return responseData;
};

const getComments = async (itemId) => {
  const response = await fetch(`${baseUrl}/apps/${id}/comments?item_id=${itemId}`);
  if (response.ok) {
    const responseJson = await response.json();
    return responseJson;
  }
  return [];
};

export { postComment, getComments };