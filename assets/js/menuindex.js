var getRest = function (city) {
    $("#loader").css("display", "block");
    $("#pageMenu").css("display", "none");
    fetch("https://documenu.p.rapidapi.com/restaurants/zip_code/" + city + "?size=100&fullmenu=true", {
        "method": "GET",
        "headers": {
            "x-api-key": "2de694e41e7bf0f9fe13266e96f2a045",
            "x-rapidapi-key": "88e1447b5fmsh82bcb1516d4eca7p18ca6bjsn49a0d0de2e35",
            "x-rapidapi-host": "documenu.p.rapidapi.com"
        }
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (rests) {
                    randomRest = "" + (Math.floor(Math.random() * rests.data.length));
                    writeRest(rests, randomRest);
                });
            }
            $("#loader").css("display", "none");
            $("#pageMenu").css("display", "block");
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
    window.location.reload();
})

var pullLocal = JSON.parse(localStorage.getItem('visitedRestaurants')) || {};
$('#goingBtn').on('click', function (event) {
    // need save to local storage savedRestaurants name + ID
    var lat = $('#lat').attr("data-lat");
    var long = $('#lon').attr("data-lon");
    var rest = $('#restName').text();
    var restId = $('#restId').attr("data-restID");
    console.log(pullLocal);
    pullLocal[restId] = {
        name: rest,
        comment: "",
        rating: "",
        latitude: lat,
        longitude: long,
    },
        pullLocal.last = restId;
    localStorage.setItem('visitedRestaurants', JSON.stringify(pullLocal));
});


//open maps

$('#maps').on('click', function (lat, long) {
    var lat = $('#lat').attr("data-lat");
    var long = $('#lon').attr("data-lon");
    if /*for iOS*/
        ((navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1) ||
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");

    else /*else use Google*/
        window.open("https://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
});
