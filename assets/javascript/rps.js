console.log("something is happening");

greetTheUser();

// greeting is hidden on load
//hide the form
// bmc: todo hide the form

// bmc: todo unhide the greeting and put in the name

// bmc: need to use selfName and either pass it or... hmm...

// bmc: todo unhide the status and note the status as "waiting for other player"

// rpsData.ref().on("value", function (whatWeGetBack) {
//     console.log(whatWeGetBack.val());
//
//     $("#selfName").html(whatWeGetBack.val()[0].name);
//
//
//
// }, function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
// });

// var myFirebase = new Firebase('https://FIREBASE-PROJECTID.firebaseio.com/');
// var usernameInput = document.querySelector('#username');
// var textInput = document.querySelector('#text');
// var postButton = document.querySelector('#post');
//
// postButton.addEventListener("click", function() {
//     var msgUser = usernameInput.value;
//     var msgText = textInput.value;
//     configThisAlready.set(msgUser + " says: " + msgText);
//     textInput.value = "";
// });