// html page 1 buttons
//Need help here tried many different ways, can't push to the array we create the first time because it's just numbers
$('#submitCity').submit( function(event) {
    event.preventDefault();
    var city = "" + ($('#zipCode').val());
    var pullLocal = localStorage.getItem('restZip');
    var restZipParse = JSON.parse(localStorage.getItem('restZip'));
    console.log(city);
    if (pullLocal === null) {
        var firstObj = new Object();
        firstObj["zip0"] = city;
        localStorage.setItem('restZip', JSON.stringify(firstObj));
    } else if (Object.keys(restZipParse).length === 1) {
        var zipKey = Object.keys(restZipParse)[0];
        var firstZip = restZipParse[Object.keys(restZipParse)[0]];
        var newObj = new Object();
        newObj[zipKey] = firstZip;
        newObj['zip1'] = city;
        localStorage.setItem('restZip', JSON.stringify(newObj));
        
    } else {
        var current = JSON.parse(localStorage.getItem('restZip'));
        current['zip'+Object.keys(current).length] = city;
        localStorage.setItem('restZip', JSON.stringify(current));
    }
    window.location.href = "menuindex.html";
});
$('#submitRecipe').submit( function(event) {
    event.preventDefault();
    window.location.href = "page4.html";
});
$('#submitRate').on('click', function() {
    localStorage.unshift($(this).attr('id'), $(this).prev().val());
});

var testing = JSON.parse(localStorage.getItem('restZip'));
console.log(testing[Object.keys(testing)[Object.keys(testing).length - 1]]);