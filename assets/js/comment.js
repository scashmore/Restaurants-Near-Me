var pullLocal = JSON.parse(localStorage.getItem('visitedRestaurants')) || {};
//on page load, write most recent saved rest
var mostRecent = function (recentRestId) {
    var storedLength = Object.keys(pullLocal).length;
    var lastEl = storedLength - 1;
    var lastId = pullLocal.last;
    var mostRecentName = pullLocal[lastId].name;
    var mostRecentCom = pullLocal[lastId].comment;
    var mostRecentRate = pullLocal[lastId].rating;
    console.log(mostRecentName);
    $('#restPrint').text(mostRecentName);
    $('#restPrint').append('<div class="restId" data-restID="' + lastId + '"></div>')
    var keyArr = Object.keys(pullLocal);
    var i = 1;
    keyArr.forEach(element => {
        console.log(element);
        if (element !== "last") {
            var nextId = element;
            var nextRest = pullLocal[element].name;
            var nextComment = pullLocal[element].comment;
            console.log(nextComment);
            var nextRating = pullLocal[element].rating;
            var lat = pullLocal[element].latitude;
            var lon = pullLocal[element].longitude;
            //Yes I'm using template literal for this
            var inputCard = `<section class="card uk-margin">
                <div id="restName${i}">${nextRest}
                    <div class="restId" data-restNum="${nextId}"></div>
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
                <button class="restSubmit btn uk-button uk-button-default">Submit</button>
                <div data-lat="${lat}"></div>
                <div data-lon="${lon}"></div>
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
        }
        i++;
    });
}

console.log(JSON.parse(localStorage.getItem('visitedRestaurants')));
var restParsed = JSON.parse(localStorage.getItem('visitedRestaurants'));
var recentRestId = restParsed[Object.keys(restParsed)[Object.keys(restParsed).length - 1]];
mostRecent(recentRestId);
// var saveLocal = function (id) {
//     pullLocal.last = id
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
    var restId = $(this).parent().prev().children().data("restnum");
    console.log(restId);
    pullLocal[restId].rating = $(this).prev().val();
    pullLocal[restId].comment = $(this).siblings(0).first().val();
    console.log(pullLocal);
    localStorage.setItem('visitedRestaurants', JSON.stringify(pullLocal));
})