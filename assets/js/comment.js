var pullLocalRest = JSON.parse(localStorage.getItem('visitedRestaurants')) || {};
var pullLocalRec = JSON.parse(localStorage.getItem('savedMeals')) || {};
//on page load, write most recent saved rest
var mostRecent = function (recentRestId) {
    if (Object.keys(pullLocalRest).length !== 0) {
        var lastId = pullLocalRest.last;
        var mostRecentName = pullLocalRest[lastId].name;
        var mostRecentCom = pullLocalRest[lastId].comment;
        var mostRecentRate = pullLocalRest[lastId].rating;
        $('#restPrint').text(mostRecentName);
        $('#restPrint').append('<div class="restId" data-restID="' + lastId + '"></div>')
        var keyArr = Object.keys(pullLocalRest);
        var i = 1;
        keyArr.forEach(element => {
            console.log(element);
            if (element !== "last") {
                var nextId = element;
                var nextRest = pullLocalRest[element].name;
                var nextComment = pullLocalRest[element].comment;
                console.log(nextComment);
                var nextRating = pullLocalRest[element].rating;
                var lat = pullLocalRest[element].latitude;
                var lon = pullLocalRest[element].longitude;
                //Yes I'm using template literal for this
                var inputCard = `<section class="card uk-margin">
                <div class="restId" id="restName${i}">${nextRest}
                    <div data-restnum=${nextId}></div>
                </div>
                <form class="textinput">
                <textarea row="5" class="uk-input" type="text" placeholder="Comments">${nextComment}</textarea>
                <div class="stars" action="">
                    <input class="star star-5 save" id="${i}star-5" type="radio" name="star${i}" value="5"/>
                    <label class="star star-5" for="${i}star-5"></label>
                    <input class="star star-4 save" id="${i}star-4" type="radio" name="star${i}" value="4"/>
                    <label class="star star-4" for="${i}star-4"></label>
                    <input class="star star-3 save" id="${i}star-3" type="radio" name="star${i}" value="3"/>
                    <label class="star star-3" for="${i}star-3"></label>
                    <input class="star star-2 save" id="${i}star-2" type="radio" name="star${i}" value="2"/>
                    <label class="star star-2" for="${i}star-2"></label>
                    <input class="star star-1 save" id="${i}star-1" type="radio" name="star${i}" value="1"/>
                    <label class="star star-1" for="${i}star-1"></label>
                </div>
                <div class="displayC">
                    <button class="restSubmit btn uk-button uk-button-default">Submit</button>
                <div data-lat="${lat}"></div>
                <button class="maps btn uk-button uk-button-default">Get Directions Again!</button>
                <div data-lon="${lon}"></div>
                </div>
                </form>
                </section>`;
                $('#allRestPrint').append(inputCard);
                if (nextRating == 5) {
                    var starPop = i + "star-5";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 4) {
                    var starPop = i + "star-4";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 3) {
                    var starPop = i + "star-3";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 2) {
                    var starPop = i + "star-2";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 1) {
                    var starPop = i + "star-1";
                    $('#' + starPop).prop("checked", "checked");
                };
                i++;
            }
        });
    }
}

var popRecipes = function () {
    if (Object.keys(pullLocalRec).length !== 0) {
        var storedLength = Object.keys(pullLocalRec).length;
        var lastId = pullLocalRec.last;
        var mostRecentName = pullLocalRec[lastId].name;
        var mostRecentCom = pullLocalRec[lastId].comment;
        var mostRecentRate = pullLocalRec[lastId].rating;
        console.log(mostRecentName);
        $('#restPrint').text(mostRecentName);
        $('#restPrint').append('<div class="restId" data-restID="' + lastId + '"></div>')
        var keyArr = Object.keys(pullLocalRec);
        var i = 100;
        keyArr.forEach(element => {
            console.log(element);
            if (element !== "last") {
                var nextId = element;
                console.log(element);
                var nextRest = pullLocalRec[element].name;
                var nextComment = pullLocalRec[element].comment;
                console.log(nextComment);
                var nextRating = pullLocalRec[element].rating;
                //Yes I'm using template literal for this
                var inputCard = `<section class="card uk-margin">
                <div class="restId" id="restName${i}">${nextRest}
                    <div data-recnum=${nextId}></div>
                </div>
                <form class="textinput">
                <textarea row="5" class="uk-input" type="text" placeholder="Comments" data-comment="">${nextComment}</textarea>
                <div class="stars" data-rate="" action="">
                    <input class="star star-5 save" id="${i}star-5" type="radio" name="star${i}" value="5"/>
                    <label class="star star-5" for="${i}star-5"></label>
                    <input class="star star-4 save" id="${i}star-4" type="radio" name="star${i}" value="4"/>
                    <label class="star star-4" for="${i}star-4"></label>
                    <input class="star star-3 save" id="${i}star-3" type="radio" name="star${i}" value="3"/>
                    <label class="star star-3" for="${i}star-3"></label>
                    <input class="star star-2 save" id="${i}star-2" type="radio" name="star${i}" value="2"/>
                    <label class="star star-2" for="${i}star-2"></label>
                    <input class="star star-1 save" id="${i}star-1" type="radio" name="star${i}" value="1"/>
                    <label class="star star-1" for="${i}star-1"></label>
                </div>
                <div class="displayC">
                    <button class="recSubmit btn uk-button uk-button-default">Submit</button>
                <div class="recipeContainer" id="recipieContainer">
                
                <a class="recipeButton btn uk-button uk-button-default" data-id=${nextId} href="#modal-center" uk-toggle>Recipe</a>
                <div id="modal-center" class="uk-flex-top" uk-modal>
                        <div id=${nextId} class="uk-responsive-width drop uk-modal-dialog uk-modal-body uk-margin-auto-vertical" uk-overflow-auto>
            
                            <button class="uk-modal-close-default" type="button" uk-close id="closeBtn"></button>
            
                            <div class="commentRecipe"></div>
                        </div>
                    </div>
                </div>
                </div>
                </form>
                </section>`;
                $('#allRecipePrint').append(inputCard);
                if (nextRating == 5) {
                    var starPop = i + "star-5";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 4) {
                    var starPop = i + "star-4";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 3) {
                    var starPop = i + "star-3";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 2) {
                    var starPop = i + "star-2";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 1) {
                    var starPop = i + "star-1";
                    $('#' + starPop).prop("checked", "checked");
                };
            }
            i++;
        });
    }
}

console.log(JSON.parse(localStorage.getItem('visitedRestaurants')));
var restParsed = JSON.parse(localStorage.getItem('visitedRestaurants'));
var recentRestId = restParsed[Object.keys(restParsed)[Object.keys(restParsed).length - 1]];
mostRecent(recentRestId);
popRecipes();
// var saveLocal = function (id) {
//     pullLocalRest.last = id
//     localStorage.setItem("visitedRestaurants", JSON.stringify(restParsed))
// };

$('input').on('click', function () {
    console.log('star test');
    $(this).parent().val($(this).val());
    console.log($(this).parent().val());
})


// $('input').on("click", function () {
//     var starClass = $(this).attr('class');
// });

//Writing this in ID form for now, will probably switch to class to for multi rest display
$('.restSubmit').on('click', function (event) {
    event.preventDefault();
    var restId = $(this).parent().parent().prev().children().attr('data-restnum');
    console.log(restId);
    console.log($(this).parent().parent().prev().children());

    console.log($(this).parent().prev().val());
    pullLocalRest[restId].rating = $(this).parent().prev().val();
    pullLocalRest[restId].comment = $(this).parent().prev().prev().val();
    console.log(pullLocalRest);
    localStorage.setItem('visitedRestaurants', JSON.stringify(pullLocalRest));
});

$('.recSubmit').on('click', function (event) {
    event.preventDefault();
    var restId = $(this).parent().parent().prev().children().attr('data-recnum');
    console.log(restId);
    pullLocalRec[restId].rating = $(this).parent().prev().val();
    pullLocalRec[restId].comment = $(this).parent().prev().prev().val();
    console.log(pullLocalRec);
    localStorage.setItem('savedMeals', JSON.stringify(pullLocalRec));
});
$('.maps').on('click', function (lat, long) {
    var lat = $(this).prev().attr("data-lat");
    var long = $(this).next().attr("data-lon");
    if /*for iOS*/

        ((navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1) ||
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");

    else /*else use Google*/
        window.open("https://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
});


$('.recipeButton').on('click', function (event) {
    event.preventDefault();
    var mealId = $(this).attr("data-id");
    console.log(mealId);
    var domLoc = $(this);
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId)
        .then(function (response, domLoc) {
            if (response.ok) {
                response.json().then(function (data, domLoc) {
                    console.log(data);
                    writeRecipe(data, domLoc);
                });
            } 
        });
    var writeRecipe = function (data) {
        var name = data.meals[0].strMeal;
        var image = data.meals[0].strMealThumb;
        var instruct = data.meals[0].strInstructions;
        var mealId = data.meals[0].idMeal;
        console.log(mealId);
        var ingObj = new Object;
        var print = $('#' + mealId);
        console.log(print);
        for (var i = 1; i < 21; i++) {
            if (data.meals[0]["strIngredient" + i] !== "") {
                var ingredient = data.meals[0]["strIngredient" + i];
                var measure = data.meals[0]["strMeasure" + i];
                ingObj[ingredient] = measure;
            }
        }
        console.log(ingObj);
        for (var j = 0; j < Object.keys(ingObj).length; j++) {
            print.append('<div class="dishDisc">' + Object.keys(ingObj)[j] + ': ' + ingObj[Object.keys(ingObj)[j]] + '</div>');
        }
        print.append('<div class="dishName">Instructions: </div>');
        print.append('<div class="dishName">' + instruct + '</div>');
    }

})

var getRecipe = function () {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    recipePrint(data);
                });
            }
        });
}
