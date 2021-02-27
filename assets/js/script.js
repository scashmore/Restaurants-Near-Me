// html page 1 buttons
//Need help here tried many different ways, can't push to the array we create the first time because it's just numbers
$('#submitCity').submit( function(event) {
    event.preventDefault();
    var city = "" + ($('#zipCode').val());
    var pullLocal = localStorage.getItem('restZip');
    var blankArr = [];
    console.log(city);
    if (pullLocal !== null) {
        var restZipParse = JSON.parse(localStorage.getItem('restZip'));
        blankArr.push(restZipParse);
        restZipParse.push(city);
        localStorage.setItem('restZip', JSON.stringify(restZipParse));
        console.log(JSON.parse(localStorage.getItem('restZip')))
    } else {
        blankArr.push(city);
        localStorage.setItem('restZip', city);
    }
    // window.location.href = "page3.html";
});
$('#submitRecipe').submit( function(event) {
    event.preventDefault();
    window.location.href = "page4.html";
});
$('#submitRate').on('click', function() {
    localStorage.unshift($(this).attr('id'), $(this).prev().val());
});
