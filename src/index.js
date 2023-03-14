import './style.css';

const Items = document.querySelector('.container');

const getMeals = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese', {
    });
    const responseData = await response.json();
    const mealsList = responseData.meals;
    console.log(mealsList);
  
    const displaymealsList = mealsList.map(
      (index) => `
   
              <div class="mealCard" id="${index.idMeal}">
            <img src="${index.strMealThumb}" class="mealImg" alt="${index.strMeal}">
            <div class="card">
              <h5 class="meal-title">${index.strMeal}</h5>
              <i class="fa-regular fa-heart"></i>             
              <span class="Likes">0</span>           
          </div>
          <button type="button" class="commentBtn">Comments</button>
        </div>`,
  );

  Items.innerHTML = displaymealsList.join(' ');
};
getMeals();
