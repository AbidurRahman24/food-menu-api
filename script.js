document.getElementById('search').addEventListener('click', searchResult);

function searchResult (e) {
    e.preventDefault()
    document.getElementById('text').innerHTML = ''

    const foodTitle = document.getElementById("inputTitle").value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${foodTitle}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.meals.slice(0,8).forEach(meal => {
                document.getElementById('text').innerHTML += `
                            <div class='my-2 col-md-3'>
                                <div onClick="foodDetails('${meal.idMeal}')" class="card" style="width: 18rem;">
                                <img  class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                                <div class="card-body">
                                <p class="card-text">${meal.strMeal}</p>
                            </div>
                        </div>
                            
                    </div>
            
            `
            })

        })
        .catch (error =>{
            displayError('Sorry! I failed to load Food API, Please try again later!!!')
        })

}
const foodDetails = id => {
    let URL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            displayDetails(data.meals[0])
        });
}

const displayDetails = data => {
    document.getElementById('food-details').innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${data.strMealThumb} alt="Card image cap">
  <div class="card-body">
  <h4>Name: ${data.strMeal}</h4>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${data.strIngredient1}</li>
  <li class="list-group-item">${data.strIngredient2}</li>
  <li class="list-group-item">${data.strIngredient3}</li>
  <li class="list-group-item">${data.strIngredient4}</li>
  <li class="list-group-item">${data.strIngredient5}</li>
  <li class="list-group-item">${data.strIngredient6}</li>
  <li class="list-group-item">${data.strIngredient7}</li>
</ul>
  </div>
  <p>${data.strInstructions}</p>
</div>
  m
    `
}


const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}