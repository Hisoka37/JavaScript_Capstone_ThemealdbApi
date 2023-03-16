const getMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese',

  );
  const responseData = await response.json();
  return responseData;
};

export default getMeals;