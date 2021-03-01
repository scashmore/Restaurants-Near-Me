var visitedRestaurants={
    "1234":{
        name: "McDonalds",
        rating: 5,
        comment: "was fine"
    },
    last: "1234"
}
// go into localstorage parse object

console.log(visitedRestaurants[456], "<===");
var restId = "1234"
if(visitedRestaurants[restId]){
    visitedRestaurants[restId].rating= 4
    visitedRestaurants[restId].comment= "meh"
    console.log("will run")
   
}else{
    visitedRestaurants[restId]={
        name: "arbys",
        rating: 5,
        comment: "fine"
    }
}
visitedRestaurants.last = restId
//saveLocal()
// visitedRestaurants[$(this).parent().prev().children().attr('data-restId')] = {
//     name: "Arbys",
//     rating: 7,
//     comment: $(this).siblings(0).val()
// };

console.log(visitedRestaurants)