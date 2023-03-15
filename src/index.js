import './style.css';
import getMeals from './Modules/getmeals.js';
import displayModal from './Modules/popUp.js';
import { getLikes, postLike } from './Modules/getLikes.js';

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

  combinedArray.forEach((mealWithLike) => {
    const string = `
      <div class="mealCard">
        <img src="${mealWithLike.strMealThumb}" alt="meal" class="mealImg">
        <div class="card">
            <h5 class="meal-title">${mealWithLike.strMeal}</h5>
            <div class="like m-0" id="${mealWithLike.idMeal}">
              <p class='likes m-0'>${mealWithLike.likes}</p>
              <i class="fa-regular fa-heart like-btn"></i> 
            </div>
          </div>
          <button type="button" class="commentBtn">Comments</button>
        </div>
      </div>`;

      const stringItem = parser.parseFromString(string, 'text/html').body
      .firstChild;

    const likeBtn = stringItem.querySelector('.like-btn');
    const likeEl = stringItem.querySelector('.likes');

    likeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        postLike(mealWithLike.idMeal);
        mealWithLike.likes += 1;
        likeEl.innerHTML = `${mealWithLike.likes}`;
        // e.target.classList.remove('far');
        e.target.classList.add('fas');
        likeEl.style.color = '#ff0d00';
      });
  
      mealsSection.append(stringItem);

  });
};

initAll();