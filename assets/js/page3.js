//Taylor's code

// var closeBtnEl = $('#closeBtn');
// var goingBtnEl = $('#goingBtn');
// var notGoingBtn = $('#notGoingBtn');

// closeBtnEl.on('click', function() {};
// goingBtnEl.on('click', function() {};
// notGoingBtn.on('click', function() {};

//Shawn's code
var getRest = function(city) {
   
    fetch("https://documenu.p.rapidapi.com/restaurants/zip_code/" + city + "?size=100&fullmenu=false", {
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
                    randomRest = data[(Math.floor(Math.random() * 19))];
                    console.log(randomRest);
                    // writeRest(randomRest);
                });
            }
        })
        .catch(function(error) {});
};

getRest();

// var writeRest = function(data) {
//     var name =
//     var address = 
//     var 
// }

//reruns the randomizer
$('#notGoingBtn').on('click', function() {
    //clears result div before running script again
    $('#result').empty();
    getRest();
})

$('#goingBtn').on('click', function() {
    // need save to local storage savedRestaurants name + ID
})