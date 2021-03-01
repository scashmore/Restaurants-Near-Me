//on page load, write most recent saved rest
var mostRecent = function (recentRestId) {
    var pullLocal = localStorage.getItem('visitedRestaurants');
    var edited = JSON.parse(pullLocal);
    var storedLength = Object.keys(edited).length;
    var lastEl = storedLength - 1;
    var mostRecentName = Object.keys(edited)[lastEl];
    $('#restPrint').text(mostRecentName);
    $('#restPrint').append('<div class="restId" data-restID="'+recentRestId+'"></div>')
    for (var i = lastEl - 1; i > -1; i--) {
        console.log(Object.keys(edited)[i]);
        var nextRest = Object.keys(edited)[i];
        console.log(nextRest);
        var nextId = Object.values(edited)[i][0];
        console.log(edited);
        console.log(nextId);
        var nextComment = Object.values(edited)[i][1];
        var nextRating = Object.values(edited)[i][2];
        console.log(nextId);
        console.log(nextComment);
//Yes I'm using template literal for this
        var inputCard = `<section class="card uk-margin">
        <h2>Comments Restaurant</h2>
        <div id="restName${i}">${nextRest}
        <div class="restId" data-restID="${nextId}"></div>
        </div>
        <form class="textinput">
            <textarea row="5" class="uk-input" type="text"
                placeholder="Comments"></textarea>


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
        </form>
    </section>`
        $('#allRestPrint').append(inputCard);
        if (nextRating == 5) {
            var starPop = i + "star-5";
            $('#'+starPop).prop("checked", "checked");
        } else if (nextRating == 4) {
            var starPop = i + "star-4";
            $('#'+starPop).prop("checked", "checked");
            
        } else if (nextRating == 3) {
            var starPop = i + "star-3";
            $('#'+starPop).prop("checked", "checked");
            
        } else if (nextRating == 2) {
            
            var starPop = i + "star-2";
            $('#'+starPop).prop("checked", "checked");
        } else if (nextRating == 1) {
            var starPop = i + "star-1";
            $('#'+starPop).prop("checked", "checked");

        }
    }
}

console.log(JSON.parse(localStorage.getItem('visitedRestaurants')));
var restParsed = JSON.parse(localStorage.getItem('visitedRestaurants'));
var recentRestId = restParsed[Object.keys(restParsed)[Object.keys(restParsed).length - 1]];
mostRecent(recentRestId);

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
    var textArea = $(this).siblings(0).val();
    var restName = $(this).parent().prev().text();
    var restId = $(this).parent().prev().children().attr('data-restId');
    var rating = $(this).prev().val();
    console.log(restName, restId, textArea, rating);
    var pullLocal = localStorage.getItem('visitedRestaurants');
    var edited = JSON.parse(pullLocal);
    if (pullLocal === null) {    

    } else if (Object.keys(edited).length === 1) {
        var firstName = Object.keys(edited)[0];
        var firstId = edited[Object.keys(edited)[0]];
        var newObj = new Object();
        newObj[firstName] = [firstId, textArea, rating];
        localStorage.setItem('visitedRestaurants', JSON.stringify(newObj));
    } else {
        var current = JSON.parse(localStorage.getItem('visitedRestaurants'));
        delete current.restName;
        current[restName] = [restId, textArea, rating];
        localStorage.setItem('visitedRestaurants', JSON.stringify(current));
        console.log(JSON.parse(localStorage.getItem('visitedRestaurants')));
    }
})