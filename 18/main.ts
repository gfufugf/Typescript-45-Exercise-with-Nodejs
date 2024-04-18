//Making a Array of Countries and Print its Orignal Ordering
let countriesTovisit: string[] = ["China", "Denmark", "Brazil", "Argentina",];
console.log("Orignal Order:", countriesTovisit);

//Print the Array in Alphabetical order without modifing the Actual Array List
console.log("Alphabeticalorder:", [...countriesTovisit].sort());

//Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesTovisit);

//Print the Array in Reversed Order without Modifying the Actual Array list
console.log("Reverseorder:", [...countriesTovisit].reverse());

//Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesTovisit);

//We have change the orginal Arrray Order Now
console.log("Orginal Array Reverse", countriesTovisit.reverse());

//Print the Array to show that it's back to its orginal order
console.log("Back to Orginal Order:", countriesTovisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted to Alphabetical order:", countriesTovisit.sort());

//We have change the orginal Arrray Order Now in reverse order again
console.log("Orginal Array Reverse", countriesTovisit.reverse());

