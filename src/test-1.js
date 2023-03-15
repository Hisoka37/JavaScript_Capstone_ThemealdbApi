import './style.css';

// import { popUp } from '../modules/pop.js';
import getMeals from './modules/geatMeals-1.js';
import mealInfo from './modules/popup-1.js';

getMeals();

const popUp = document.querySelector('.pop-up');

const commentBtn = document.querySelectorAll('commentBtn');
// console.log(commentBtn);
commentBtn.forEach((btn, index) => {
  btn.addEventListner('click', async () => {
    // console.log(mealInfo);
    popUp.innerHTML = `
    <div class='pop-container'>
 <div class="close-btn">X</div>
 <section class="meal-img">
 <img src="${mealInfo.mealsList[index].strMeal}" alt="${mealInfo.mealsList[index].strMeal}">
 </section>
    `;
    popUp.style.display = 'flex';
  });
});