var getRecipe = function () {
    $("#loader").css("display", "block");
    $("#pageRecipe").css("display", "none");
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    recipePrint(data);
                });
            }
            $("#loader").css("display", "none");
            $("#pageRecipe").css("display", "block");
        });
};

var recipePrint = function (data) {
    var name = data.meals[0].strMeal;
    var image = data.meals[0].strMealThumb;
    var instruct = data.meals[0].strInstructions;
    var mealId = data.meals[0].idMeal;
    var ingObj = new Object;
    for (var i = 1; i < 21; i++) {
        if (data.meals[0]["strIngredient" + i] !== "") {
            var ingredient = data.meals[0]["strIngredient" + i];
            var measure = data.meals[0]["strMeasure" + i];
            ingObj[ingredient] = measure;
        }
    }
    console.log(ingObj);
    $('#result').first().text(name);
    $('#result').append('<div id="mealId" data-mealID="' + mealId + '"></div>');
    $('#image').attr("src", image);
    $('#recipePrint').append('<div class="dishName">Ingredients: </div>');
    for (var i = 0; i < Object.keys(ingObj).length; i++) {
        $('#recipePrint').append('<div class="dishDisc">' + Object.keys(ingObj)[i] + ': ' + ingObj[Object.keys(ingObj)[i]] + '</div>');
    }
    $('#recipePrint').append('<div class="dishName">Instructions: </div>');
    $('#recipePrint').append('<div class="dishName">' + instruct + '</div>');
};

getRecipe();

$('#save').on('click', function () {
    var meal = $('#result').text();
    var mealId = $('#mealId').attr("data-mealId");
    var pullLocal = JSON.parse(localStorage.getItem('savedMeals')) || {};
    pullLocal[mealId]= {
        name: meal,
        comment: "",
        rating: "",
    };
    pullLocal.last = mealId;
    localStorage.setItem('savedMeals', JSON.stringify(pullLocal));
});

$('#getNew').on('click', function () {
    window.location.reload();
});