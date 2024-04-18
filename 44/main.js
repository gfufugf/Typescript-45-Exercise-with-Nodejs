// Define a function with a rest parameter that accept items arugments reperesenting our sandwitch
function makeSandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwitch with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwitch \n");
}
// Call the function 3 times with three different number of arguments
makeSandwitch("Chicken", "Cheese", "Garlic", "Mayo", "Egg");
makeSandwitch("Bread", "Butter");
makeSandwitch("Chicken", "Cheese", "Mayo", "Egg", "Tommato", "Sauce", "Bread", "Butter");
