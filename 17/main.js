// Creating A Guest List Array
var guestlist = ["Iffi", "Rani", "Bareerah", "Ayra"];
//Making variable for those guest who cant come
var dontcome = guestlist[0];
// Print the name of guest who cant come
console.log(dontcome, "nai aa sakty han");
//Add or Remove value from guest list Array
guestlist.splice(0, 1, "Iffi");
//Massege print for Bigger Table
console.log("Good News ! We Have found a bigger table For Dinner.");
//Adding a New guest at starting index of array
guestlist.unshift("Smd");
//Addina a New guest at ending index of array
guestlist.push("Manu");
//Making a variable for storing a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//Ading a new guest to middle index of array
guestlist.splice(middleindex, 0, "Zain");
//Print Massege of Update List
console.log("Update List Of Our Guests");
//Sending a invitation massege to our guests one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me")); });
//Inform that only two guests can be invite for dinner
console.log("unfortunatly, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me ");
// Using while loop to remove guests from the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Printing a invitations to the last two guests on the list
console.log("Invitation to the Last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guests from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
