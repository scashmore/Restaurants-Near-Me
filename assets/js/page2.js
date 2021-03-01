//Writing this in ID form for now, will probably switch to class to for multi rest display
$('.restSubmit').on('click', function(event) {
    event.preventDefault();
    // var textArea = $(this).siblings(0).val();
    // var restName = $(this).parent().siblings(1).val();
    // var 
})


//on page load, write most recent saved rest
var mostRecent = function(recentRestId) {
    var pullLocal = localStorage.getItem('visitedRestaurants');
    var edited = JSON.parse(pullLocal);
    var storedLength = Object.keys(edited).length;
    var lastEl = storedLength - 1;
    var mostRecentName = Object.keys(edited)[lastEl];
    $('#restPrint').text(mostRecentName);
    for (var i = lastEl -1; i > -1; i--) {
        console.log(Object.keys(edited)[i]);
        var nextRest = Object.keys(edited)[i];
        //Yes I'm using template literal for this
        var inputCard = `<section class="card uk-margin">
        <h2>Comments Restaurant</h2>
        <div id="restName${i}">${nextRest}</div>
        <form class="textinput">
            <textarea row="5" class="uk-input" type="text"
                placeholder="Comments"></textarea>


            <div class="stars" action="">
                <input class="star star-5" id="star-5" type="radio" name="star" />
                <label class="star star-5" for="star-5"></label>
                <input class="star star-4" id="star-4" type="radio" name="star" />
                <label class="star star-4" for="star-4"></label>
                <input class="star star-3" id="star-3" type="radio" name="star" />
                <label class="star star-3" for="star-3"></label>
                <input class="star star-2 checked" id="star-2" type="radio" name="star" />
                <label class="star star-2" for="star-2"></label>
                <input class="star star-1" id="star-1" type="radio" name="star" />
                <label class="star star-1" for="star-1"></label>
            </div>
            <button class="btn uk-button uk-button-default">Submit</button>
        </form>
    </section>`
        $('#allRestPrint').append(inputCard);
    }
}

var restParsed = JSON.parse(localStorage.getItem('visitedRestaurants'));
var recentRestId = restParsed[Object.keys(restParsed)[Object.keys(restParsed).length - 1]];
mostRecent(recentRestId);