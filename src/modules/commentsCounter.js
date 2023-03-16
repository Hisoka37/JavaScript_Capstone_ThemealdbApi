const commentCounter = () => {
  const commentContainer = document.querySelector('.user-comments');
  if (commentContainer) {
    return commentContainer.children.length;
  }
  return 0;
};

export default commentCounter;