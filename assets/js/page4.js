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
    var mealId = data.meals[0].idMeal;
    var ingObj = new Object;
    for (var i = 1; i < 21; i++) {
        if (data.meals[0]["strIngredient"+i] !== "") {
            var ingredient = data.meals[0]["strIngredient"+i];
            var measure = data.meals[0]["strMeasure"+i];
            ingObj[ingredient]= measure;
        } 
    }
    console.log(ingObj);
    $('#result').first().text(name);
    $('#result').append('<div id="mealId" data-mealID="' + mealId + '"></div>');
    $('#image').attr("src", image);
    $('#recipePrint').append('<div class="dishName">Ingredients: </div>');
    for (var i = 0; i < Object.keys(ingObj).length; i++){
        $('#recipePrint').append('<div class="dishDisc">' + Object.keys(ingObj)[i] + ': ' + ingObj[Object.keys(ingObj)[i]] + '</div>');
    }
    $('#recipePrint').append('<div class="dishName">Instructions: </div>');
    $('#recipePrint').append('<div class="dishName">' + instruct + '</div>');
};

var visitedmealPage = function() {
    var visitedmeal = localStorage.getItem('mealaurants');

};

getRecipe();

$('#save').on('click', function () {
    var meal = $('#result').text();
    var mealId = $('#mealId').attr("data-mealId");
    var pullLocal = localStorage.getItem('savedMeals');
    var edited = JSON.parse(pullLocal);
    if (pullLocal === null) {
        var firstObj = new Object();
        firstObj[meal] = mealId;
        localStorage.setItem('savedMeals', JSON.stringify(firstObj));
        console.log(JSON.stringify(firstObj));
    } else if (Object.keys(edited).length === 1) {
        var firstName = Object.keys(edited)[0];
        var firstId = edited[Object.keys(edited)[0]];
        var newObj = new Object();
        newObj[meal] = mealId;
        newObj[firstName] = firstId;
        localStorage.setItem('savedMeals', JSON.stringify(newObj));
    } else {
        var current = JSON.parse(localStorage.getItem('savedMeals'));
        current[meal] = mealId;
        localStorage.setItem('savedMeals', JSON.stringify(current));
        console.log(JSON.parse(localStorage.getItem('savedMeals')));
    }
})

$('#getNew').on('click', function() {
    window.location.reload();
})