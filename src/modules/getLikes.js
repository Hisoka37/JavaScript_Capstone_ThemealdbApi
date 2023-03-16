const postLike = async (itemId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IrjR8YGC9Yzx2yywDZF3/likes/',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const responseText = await response.text();
  return responseText;
};

const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IrjR8YGC9Yzx2yywDZF3/likes/',
  );
  const responseJSON = await response.json();
  return responseJSON;
};

export { getLikes, postLike };