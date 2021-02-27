var getRecipe = function () {
    
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    recipePrint(data);
                });
            }
        });
};

var recipePrint = function(data) {
    var name = data.meals[0].strMeal;
    var image = data.meals[0].strMealThumb;
    var instruct = data.meals[0].strInstructions;
    var ingredientArr = [];
    var measureArr = [];
    var newDiv = $('<div>');
    for (var i = 1; i < 21; i++) {
        if (data.meals[0]["strIngredient"+i] !== "") {
            ingredientArr.push(data.meals[0]["strIngredient"+i]);
            measureArr.push(data.meals[0]["strMeasurement"+i]);
        } else {
            return;
        }
    }
    console.log(ingredientArr);
    newDiv.text(name);
    newDiv.attr('class', 'DIV CLASS HERE');
    $('#results').append(nedDiv);
    newDiv.text(image);
    newDiv.attr('class', 'DIV CLASS HERE');
    $('#results').append(nedDiv);
    newDiv.text(instruct);
    newDiv.attr('class', 'DIV CLASS HERE');
    $('#results').append(nedDiv);
};

var visitedRestPage = function() {
    var visitedRest = localStorage.getItem('restaurants');

};

getRecipe();