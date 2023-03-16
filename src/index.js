import './style.css';
import getMeals from './modules/getmeals.js';
import displayModal from './modules/popUp.js';
import { getLikes, postLike } from './modules/getLikes.js';

const mealsSection = document.querySelector('.container');
const popUpSection = document.querySelector('.pop-up');
const parser = new DOMParser();

const initAll = async () => {
  const likesArray = await getLikes();
  const mealsArray = await getMeals();

  const combinedArray = mealsArray.meals.map((meal) => {
    const likeForThisMeal = likesArray.filter(
      (likeObj) => likeObj.item_id === meal.idMeal,
    );
    return {
      strMealThumb: meal.strMealThumb,
      strMeal: meal.strMeal,
      idMeal: meal.idMeal,
      likes: likeForThisMeal.length === 0 ? 0 : likeForThisMeal[0].likes,
    };
  });

  combinedArray.forEach((likedMeals) => {
    const string = `
      <div class="mealCard">
        <img src="${likedMeals.strMealThumb}" alt="meal" class="mealImg">
        <div class="card">
            <h5 class="meal-title">${likedMeals.strMeal}</h5>
            <div class="like" id="${likedMeals.idMeal}">
              <p class='likes'>${likedMeals.likes}</p>
              <i class="fa-regular fa-heart like-btn"></i> 
            </div>
          </div>
          <button type="button" class="commentBtn">Comments</button>
        </div>
      </div>`;

    const stringItem = parser.parseFromString(string, 'text/html').body.firstChild;

    const likeBtn = stringItem.querySelector('.like-btn');
    const likeEl = stringItem.querySelector('.likes');

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      postLike(likedMeals.idMeal);
      likedMeals.likes += 1;
      likeEl.innerHTML = `${likedMeals.likes}`;
      e.target.classList.add('fas');
      likeEl.style.color = '#ff0d00';
    });

    mealsSection.append(stringItem);

    const commentbtn = stringItem.querySelector('.commentBtn');
    commentbtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.style.display = 'flex';
      displayModal(likedMeals.idMeal);
    });
  });
};

initAll();