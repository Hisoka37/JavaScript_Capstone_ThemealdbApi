// import getMeals from './geatMeals.js';

// eslint-disable-next-line no-unused-vars
const mealInfo = async (idMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const responseJSON = await response.json();
  return responseJSON;
};

export default mealInfo;
// const popUp = document.querySelector('.pop-up');
// const render = async (idMeal) => {
//   popUp.innerHTML = `
//   <div class='pop-container'>
// <div class="close-btn">X</div>
// <section class="meal-img">
// <img src="${getMeals.mealsList.strMealThumb}" alt="${getMeals.mealsList.strMeal}">
// </section>
// <section class="pop-info">
// <h3>${getMeals.mealsList.strMeal}</h3>
// <p><b> Food Ingredients </b></p>
// <ul class="meal-info">
// <li>${mealInfo.mealsList.strIngredient1}: ${
//   mealInfo.mealsList.strMeasure1
// }</li>
//               <li>${mealInfo.mealsList.strIngredient2}: ${
//   mealInfo.mealsList.strMeasure2
// }</li>
//               <li>${getMeals.mealsList.strIngredient3}: ${
//   getMeals.mealsList.strMeasure3
// }</li>
//               <li>${getMeals.mealsList.strIngredient4}: ${
//   getMeals.mealsList.strMeasure4
// }</li>
//               <li>${getMeals.mealsList.strIngredient5}: ${
//   getMeals.mealsList.strMeasure5
// }</li>
// </ul>
// <h4>Comments (<span id="number-of-comments"></span>)</h4>
// <ul class="comments">
// <li></li>
// <li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
// <li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
// </ul>u
// <h4>Add a comment</h4>
// <ul class="add-comment">
// <li><input type="text" placeholder="Your name" name="user-name"></li>
// <li><textarea name="new comment" id="new-comment" col"></textarea></li>
// <li><button id="comment-btn">Comment</button></li>
// </ul>
// </section>
// </div>
//   `
// };
