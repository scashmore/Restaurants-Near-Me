//js
var getRest = function(city) {
   
    fetch("https://documenu.p.rapidapi.com/restaurants/zip_code/" + city + "?size=100&fullmenu=true", {
	"method": "GET",
	"headers": {
		"x-api-key": "e9fe0dd92c9b93bedf0eff314991856e",
		"x-rapidapi-key": "88e1447b5fmsh82bcb1516d4eca7p18ca6bjsn49a0d0de2e35",
		"x-rapidapi-host": "documenu.p.rapidapi.com"
	}
})
        .then(function(response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                   
                });
            }
        })
        .catch(function(error) {})
    
};

// getRest();

var getRecipe = function () {
    
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data)
                    recipePrint(data);
                })
            }
        })
};

// getRecipe();

var recipePrint = function(data) {
    var name = data.meals[0].strMeal;
    var image = data.meals[0].strMealThumb;
    var instruct = data.meals[0].strInstructions;
    var ingredientArr = [];
    for (var i = 1; i < 21; i++) {
        if (data.meals[0]["strIngredient"+i] !== "") {
            ingredientArr.push(data.meals[0]["strIngredient"+i]);
        } else {
            return;
        }
    }
    console.log(ingredientArr);
}

var visitedRestPage = function() {
    var visitedRest = localStorage.getItem('restaurants')

}












// html page 1 buttons
$('#submitCity').submit( function(event) {
    event.preventDefault();
    var city = $('#zipCode').val();
    console.log(city);
    getRest(city);
});
$('#submitRecipe').submit( function(event) {
    event.preventDefault();
    getRecipe();
});
$('#submitRate').on('click', function() {
    localStorage.unshift($(this).attr('id'), $(this).prev().val())
});
