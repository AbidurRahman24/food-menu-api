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
const addBtn = document.getElementById("search_button")
addBtn.addEventListener('click', ()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i")
  .then(res => res.json())
  .then(data =>{
      loadData(data)
    });
})
const loadData= (meal)=>{
    const div = document.getElementById("food-container")
    meal.meals.forEach(element => {
        // console.log(element);
        const mealsDiv = document.createElement('div')
        mealsDiv.className = 'meal'
        const {strMeal, strMealThumb} = element
        mealsDiv.innerHTML = `
        <div>
        <button onclick='displayContry("${meal}")'><img src="${strMealThumb}" alt=""></button>
        </div>
        <p>${strMeal}</p>
        
        `
        div.appendChild(mealsDiv)
    });
}
const displayContry = meal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data[0]);
        // countryDetails(data[0])
    })
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