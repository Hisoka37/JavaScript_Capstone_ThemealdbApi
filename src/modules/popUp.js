const mealInfo = async (idMeal) => {
  const information = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const infoJSON = await information.json();
  return infoJSON;
};
const popUpSection = document.querySelector('.pop-up');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpSection.innerHTML = '<div class="backdrop"></div>';

  mealInfo(idMeal).then((meal) => {
    const string = `
    <div class="modal-container">
      <div class="modal-popup">
        <i class="fa-solid fa-xmark close"></i>
        <div class="item-info">
          <img src=${
  meal.meals[0].strMealThumb
} alt="Thumbnail" class="modal-popup-img">  
          <h3 class="meal-popup-item">${meal.meals[0].strMeal}</h3>
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
  
      
      </div>`;

    const stringItem = parser.parseFromString(string, 'text/html').body
      .firstChild;
    popUpSection.append(stringItem);

    const closeBtn = stringItem.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // popUpSection.classList.add('hidden');
      popUpSection.style.display = 'none';
    });
  });
};

export default displayModal;