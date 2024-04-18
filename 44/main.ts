// Define a function with a rest parameter that accept items arugments reperesenting our sandwitch
function makeSandwitch(...items: string[]){
    console.log("\n Making a sandwitch with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
   
    console.log("\n Now Enjoy Sandwitch \n");
}
    // Call the function 3 times with three different number of arguments

    makeSandwitch("Chicken", "Cheese", "Garlic", "Mayo", "Egg");

    makeSandwitch("Bread", "Butter");

    makeSandwitch("Chicken", "Cheese", "Mayo", "Egg", "Tommato", "Sauce", "Bread", "Butter");
    
