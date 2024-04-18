// Array of Current Users
var current_users = ["Smd", "Manu", "Ayra", "Saqib", "Zain",];
// Array of New Users
var new_users = ["Afaq", "Mubashir", "Smd", "Saad", "Zain",];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save is our condition
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Masseges  using if else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, "is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
