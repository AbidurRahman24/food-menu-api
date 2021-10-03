document.getElementById('search').addEventListener('click', searchResult);

function searchResult(e) {
    e.preventDefault()
    document.getElementById('text').innerHTML = ''

    const foodTitle = document.getElementById("inputTitle").value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${foodTitle}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
            data.meals.forEach(meal => {
                console.log(meal);
                document.getElementById('text').innerHTML += `
                            <div class='my-2 col-md-3'>
                                <div class="card" style="width: 18rem;">
                                <img  class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                                <div class="card-body">
                                <p class="card-text">${meal.strMeal}</p>
                            </div>
                        </div>
                            
                    </div>
            
            `
            })

        })

}