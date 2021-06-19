// fetch("www.themealdb.com/api/json/v1/1/filter.php?i")
//   .then((response) => response.json())
//   .then((data) => loadData(data));

// const loadData = () => {
//   const searchBtn = document.getElementById("search_button");
//   searchBtn.addEventListener("click", () => {
//       console.log('clicked');
//     const inputMeal = document.getElementById("search-bar").value;
//     getmealData(inputMeal);
//   });
// };
// const addBtn = document.getElementById("search_button")
// addBtn.addEventListener('click', ()=>{
//     fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i")
//   .then(res => res.json())
//   .then(data =>{
//       loadData(data)
//     });
// })

const getWeatherData = ()=> {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // loadData(data)
            let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            // mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        // mealList.innerHTML = html;
        })
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('meal').value;
    getWeatherData(inputCity)
})



const loadData= (meal)=>{
    const div = document.getElementById("food-container")
    // meal.meals.forEach(element => {
    //     // console.log(element);
    //     const mealsDiv = document.createElement('div')
    //     mealsDiv.className = 'meal'
    //     const {strMeal, strMealThumb} = element
    //     mealsDiv.innerHTML = `
    //     <div>
    //     <button onclick='displayMeal("${element.strMeal}")'> <img src="${strMealThumb}" alt="">
    //     </button>
    //     </div>
    //     <p>${strMeal}</p>
    //     `
    //     div.appendChild(mealsDiv)
    // });

    
}
const displayMeal = (meal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  const countryDetails = country =>{
    console.log(country);
    const countryDetail = document.getElementById('food-details');
    // const {name, capital, population,flag} = country
    // countryDetail.innerHTML = `
    // <img src='${flag}'></img>
    // <h1>${name}</h1>
    // <p>${capital}</p>
    // <p>${population}</p>
    // `
  }