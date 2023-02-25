const loadMeals =(searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
    meals.forEach(meal =>{
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick="mealDetailLoad(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
  Details
</button>
            </div>
          </div>
          <!-- Button trigger modal -->
        `
       mealsContainer.appendChild(mealDiv)
    })
}
const searchMeals =() =>{
    const searchText = document.getElementById('search-field').value;
   loadMeals(searchText);
}
const mealDetailLoad = mealId =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]))

}

const displayMealDetail = meal =>{
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal
  document.getElementById('details-container').innerHTML =`
  <h4> ${meal.strCategory} </h4>
  <h4> ${meal.strArea} </h4>
  <h4> ${meal.strTags? meal.strTags :''} </h4>
  <img class ="img-fluid w-75 h-75 mx-5" src ="${meal.strMealThumb}">

  `

}

loadMeals('')