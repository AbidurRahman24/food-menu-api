let val = document.getElementById("input")

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res => res.json())
    .then(food => {
       document.getElementById('search').addEventListener('click',()=>{
            let userData = val.value;
            let emptyArray = []
            if (userData) {
                emptyArray = food.meals.filter((data) => {
                    console.log(data);
                    return data.toLowerCase().startsWith(userData.toLocaleLowerCase())
                })
            }
            document.getElementById("text").innerHTML = emptyArray
        
       })
    })
