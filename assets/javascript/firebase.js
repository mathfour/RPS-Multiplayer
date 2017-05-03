/**
 * Created by SilverDash on 5/2/17.
 */

// bmc: configThisAlready is the configured firebase database

var configThisAlready = {
    apiKey: "AIzaSyCL1uRHY0_YCWXSYoagfk9n534RvTjdHcM",
    authDomain: "rps-with-friends.firebaseapp.com",
    databaseURL: "https://rps-with-friends.firebaseio.com/",
    storageBucket: "rps-with-friends.appspot.com"
};

firebase.initializeApp(configThisAlready);

// Create a variable to reference the database
var uberDatabase = firebase.database();

// bmc: ONLY USE TO CLEAR THE COOKIE TO TEST
// $.removeCookie("rockPaperScissorsApp");

// bmc: get the cookie value for this user, if they have one
userID = $.cookie("rockPaperScissorsApp");
console.log("FYI: the cookie for this computer is " + userID);

// bmc: if this user doesn't have a cookie, ask for name and create a cookie
if(!userID){
    $("#startGame").on("click", function(eventForClick) {
        eventForClick.preventDefault();
        console.log("it's working");
        userName = $("selfName").val();
        console.log(userName);
    });
    var thisUserID = uberDatabase.ref().push({
        "name": "",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "game": [],
        "chat":[]
    }).key;
    console.log(thisUserID);
    $.cookie("rockPaperScissorsApp", thisUserID);
    console.log("FYI: the cookie for this computer will be " + thisUserID);
}// bmc: our user now has a cookie

thisCookie = $.cookie("rockPaperScissorsApp");
console.log("this should be the key and cookie: " + thisCookie);

// bmc: switch to referencing only that user's data
var thisUserDatabase = uberDatabase.ref(thisCookie);

console.log("this is the user we're on: " + thisUserDatabase);

function greetTheUser () {
    console.log("function greetTheUser () is running");
    thisUserDatabase.on("value", function(snapshot) {
        console.log("info for person now: ");
        console.log(snapshot.val());
        console.log("this is name" , snapshot.val().name); // bmc: note that this happens before the user inputs their name, so it's blank. Gotta fix that

        $("#userName").text(snapshot.val().name);

    }); // bmc: end of infoForPersonNow.on("value"
}
