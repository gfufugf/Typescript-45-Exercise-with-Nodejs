// Creating A Guest List Array
let guestlist = ["Iffi", "Rani", "Bareerah", "Ayra"];

//Making variable for those guest who cant come
let dontcome = guestlist[0];

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
let middleindex: number = Math.floor(guestlist.length / 2);

//Ading a new guest to middle index of array
guestlist.splice(middleindex, 0, "Zain");

//Print Massege of Update List
console.log("Update List Of Our Guests");

//Sending a invitation massege to our guests one by one with thier names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me`));