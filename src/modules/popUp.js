import { getComments, postComment } from './getComments.js';
import commentCounter from './commentsCounter.js';

const mealData = async (idMeal) => {
  const information = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const dataJson = await information.json();
  return dataJson;
};
const popUpSection = document.querySelector('.pop-up');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpSection.innerHTML = '<div class="backdrop"></div>';
  const commentItems = await getComments(idMeal);

  mealData(idMeal).then((meal) => {
    const string = `
    <div class="modal-container">
      <div class="modal-popup">
        <i class="fa-solid fa-xmark close"></i>
        <div class="item-info">
          <img src=${
  meal.meals[0].strMealThumb
} alt="Thumbnail" class="popup-img">  
          <h3 class="popup-title">${meal.meals[0].strMeal}</h3>
          <div class="info-links">
            <button> <a href="${
  meal.meals[0].strSource
}" target="_blank"> Source</a></button>
            
          </div>
          <div class="meal-popup-description">    
            <p><b> Food Ingredients </b></p>
            <ul>
              <li>${meal.meals[0].strIngredient1}: 
              ${meal.meals[0].strMeasure1}</li>
              <li>${meal.meals[0].strIngredient2}: 
              ${meal.meals[0].strMeasure2}</li>
              <li>${meal.meals[0].strIngredient3}: 
              ${meal.meals[0].strMeasure3}</li>
              <li>${meal.meals[0].strIngredient4}: 
              ${meal.meals[0].strMeasure4}</li>
              <li>${meal.meals[0].strIngredient5}: 
              ${meal.meals[0].strMeasure5}</li>
            </ul>
            <p><b>Recipe</b></p>
            <p>${meal.meals[0].strInstructions}</p>  
            <div class="tags"> <b>Tags:</b> 
            ${(meal.meals[0].strTags || '')
    .split(',')
    .map((el) => `<code class='tag'>${el}</code>`)}
              </div>
          </div>
        </div>

        <h3 class='count'>Comments(<b class='comments'>0</b>)</h3>
        <div class='user-comments'>
        ${commentItems ? commentItems.map((comment) => `
        <div class="comment">
            <div class="commented">
              <div class="username"><b>${comment.username}:</b></div>
              <div class="message">${comment.comment}</div>
            </div>
          </div>`).join('') : ''}
      </div>
      <form class="comments-posted">
            <h3>Your Comment</h3>
            <input type="text" name="username" class="user-name" placeholder="your name" required>
            <textarea class="user-comment" name="comment" placeholder="your comment" required></textarea>
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>`;
    const stringItem = parser.parseFromString(string, 'text/html').body.firstChild;
    popUpSection.append(stringItem);
    const closeBtn = stringItem.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.style.display = 'none';
    });
    const form = stringItem.querySelector('form');
    const commentContainer = document.querySelector('.user-comments');
    const counter = stringItem.querySelector('.comments');

    counter.innerHTML = `${commentCounter()}`;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const user = formData.get('username');
      const message = formData.get('comment');
      postComment(idMeal, user, message);
      const commentText = `
      <div class="comment">
        <div class="commented">
          <div class="username"><b>${user}:</b></div>
          <div class="message">${message}</div>
        </div>
        
      </div>`;
      const userComment = parser.parseFromString(commentText, 'text/html').body.firstChild;
      commentContainer.append(userComment);
      form.reset();
      counter.innerHTML = `${commentCounter()}`;
    });
  });
};

export default displayModal;
