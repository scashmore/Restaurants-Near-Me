//Taylor's code

// var closeBtnEl = $('#closeBtn');
// var goingBtnEl = $('#goingBtn');
// var notGoingBtn = $('#notGoingBtn');

// closeBtnEl.on('click', function() {};
// goingBtnEl.on('click', function() {};
// notGoingBtn.on('click', function() {};

//Shawn's code
var getRest = function (city) {

    fetch("https://documenu.p.rapidapi.com/restaurants/zip_code/" + city + "?size=100&fullmenu=true", {
        "method": "GET",
        "headers": {
            "x-api-key": "e9fe0dd92c9b93bedf0eff314991856e",
            "x-rapidapi-key": "88e1447b5fmsh82bcb1516d4eca7p18ca6bjsn49a0d0de2e35",
            "x-rapidapi-host": "documenu.p.rapidapi.com"
        }
    })
        .then(function (response) {
            randomRest = "" + (Math.floor(Math.random() * 19));
            if (response.ok) {
                response.json().then(function (rests) {
                    console.log(rests);
                    console.log(randomRest);
                    console.log(rests.data[randomRest].address.formatted);
                    writeRest(rests, randomRest);
                });
            }
        })
        .catch(function (error) { });
};

var testing = JSON.parse(localStorage.getItem('restZip'));
var zip = testing[Object.keys(testing)[Object.keys(testing).length - 1]];
getRest(zip);

var first = "0"
var writeRest = function (rests, randomRest) {
    var picked = rests.data[randomRest];
    var name = picked.restaurant_name;
    var address = picked.address.formatted;
    var restId = picked.restaurant_id;
    var lat = picked.geo.lat;
    var long = picked.geo.lon;
    var menu = picked.menus[0]["menu_sections"];
    console.log(lat);
    console.log(long);
    console.log(menu);
    maps(lat, long);
    $('#result').append('<div id="restName">' + name + '</div>');
    $('#result').append('<div id="restAddress">' + address + '</div>');
    // Make this not dipslay, will pull from to save id to local storage for review page
    $('#result').append('<div id="restId" data-restID="' + restId + '"></div>');
    $('#result').append('<div id="lat" data-lat="' + lat + '"></div>');
    $('#result').append('<div id="lon" data-lon="' + long + '"></div>');
    for (var i = 0; i < menu.length; i++) {
        var sectionName = menu["" + i]["section_name"];
        var sectionDisc = menu["" + i]["description"];
        $('#menuPrint').append('<div class="sectionName">' + sectionName + '</div>');
        $('#menuPrint').append('<div class="sectionDisc">' + sectionDisc + '</div>');
        var test = Number(menu[i]["menu_items"]['length'])
        for (var j = 0; j < test; j++) {
            var menuItemArr = menu[i]["menu_items"][j]
            var dishName = menuItemArr["name"];
            var dishDisc = menuItemArr["description"];
            var dishPrice = menuItemArr["price"];
            $('#menuPrint').append('<div class="dishName">' + dishName + '</div>');
            $('#menuPrint').append('<div class="dishDisc">' + dishDisc + '</div>');
            if (dishPrice != 0) {
                $('#menuPrint').append('<div class="dishPrice">$ ' + dishPrice + '</div>');
            };
        }
    }

}

//reruns the randomizer
$('#notGoingBtn').on('click', function (event) {
    //clears result div before running script again
    $('#result').empty();
    $('#menuPrint').empty();
    getRest(zip);
})

$('#goingBtn').on('click', function (event) {
    // need save to local storage savedRestaurants name + ID
    var rest = $('#restName').text();
    var restId = $('#restId').attr("data-restId");
    var pullLocal = localStorage.getItem('visitedRestaurants');
    var edited = JSON.parse(pullLocal);
    console.log(firstName);
    console.log(firstId);
    if (pullLocal === null) {
        var firstObj = new Object();
        firstObj[rest] = restId;
        localStorage.setItem('visitedRestaurants', JSON.stringify(firstObj));
        console.log(JSON.stringify(firstObj));
    } else if (Object.keys(edited).length === 1) {
        var firstName = Object.keys(edited)[0];
        var firstId = edited[Object.keys(edited)[0]];
        var newObj = new Object();
        newObj[rest] = restId;
        newObj[firstName] = firstId;
        localStorage.setItem('visitedRestaurants', JSON.stringify(newObj));
    } else {
        var current = JSON.parse(localStorage.getItem('visitedRestaurants'));
        current[rest] = restId
        localStorage.setItem('visitedRestaurants', JSON.stringify(current));
        console.log(JSON.parse(localStorage.getItem('visitedRestaurants')));
    }
})

//open maps

function maps(lat, long) {
    var lat = $('#lat').attr("data-lat");
    var long = $('#lon').attr("data-lon");
    if /*for iOS*/
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPod") != -1) || 
       (navigator.platform.indexOf("iPad") != -1))
      window.open("maps://maps.google.com/maps?daddr="+lat+","+long+"&amp;ll=");
  
    else /*else use Google*/
      window.open("https://maps.google.com/maps?daddr="+lat+","+long+"&amp;ll=");
  }

