const getMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese', {
  });
  const responseData = await response.json();
  const mealsList = responseData.meals;
  // console.log(mealsList);
  const displaymealsList = mealsList.map(
    (index) => `
            <div class="mealCard" id="${index.idMeal}" data-id = "${index.idMeal}">
            <img src="${index.strMealThumb}" class="mealImg" alt="${index.strMeal}">
            <div class="card">
              <h5 class="meal-title">${index.strMeal}</h5>
              <i class="fa-regular fa-heart"></i>             
              <span class="Likes">0</span>           
          </div>
          <button type="button" class="commentBtn" id="${index.idMeal}" >Comments</button>
        </div>`,
  );
  const popUp = document.querySelector('.pop-up');
  const Items = document.querySelector('.container');
  Items.innerHTML = displaymealsList.join(' ');

  const commentBtn = document.querySelectorAll('.commentBtn');
  commentBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
    // console.log(mealInfo);
      popUp.innerHTML = `
      <div class='pop-container'>
      <div class="close-btn">X</div>
      <section class="meal-img">
      <img src="${mealsList[index].strMealThumb}" alt="${mealsList[index].strMeal}">
      </section>
      <section class="pop-info">
      <h3>${mealsList[index].strMeal}</h3>
      <p><b> Food Ingredients </b></p>
      <ul class="meal-info">
      <li>${mealsList[index].strIngredient1}: ${
        mealsList[index].strMeasure1
      }</li>
                    <li>${mealsList[index].strIngredient2}: ${
        mealsList[index].strMeasure2
      }</li>
                    <li>${mealsList[index].strIngredient3}: ${
        mealsList[index].strMeasure3
      }</li>
                    <li>${mealsList[index].strIngredient4}: ${
        mealsList[index].strMeasure4
      }</li>
                    <li>${mealsList[index].strIngredient5}: ${
        mealsList[index].strMeasure5
      }</li>
      </ul>
      <h4>Comments (<span id="number-of-comments"></span>)</h4>
      <ul class="comments">
      <li></li>
      <li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
      <li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
      </ul>u
      <h4>Add a comment</h4>
      <ul class="add-comment">
      <li><input type="text" placeholder="Your name" name="user-name"></li>
      <li><textarea name="new comment" id="new-comment" col"></textarea></li>
      <li><button id="comment-btn">Comment</button></li>
      </ul>
      </section>
      </div>
    `;
      popUp.style.display = 'flex';
    });
  });
};

export default getMeals;