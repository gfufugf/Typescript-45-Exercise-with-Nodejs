var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of Countries and Print its Orignal Ordering
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina",];
console.log("Orignal Order:", countriesTovisit);
//Print the Array in Alphabetical order without modifing the Actual Array List
console.log("Alphabeticalorder:", __spreadArray([], countriesTovisit, true).sort());
//Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesTovisit);
//Print the Array in Reversed Order without Modifying the Actual Array list
console.log("Reverseorder:", __spreadArray([], countriesTovisit, true).reverse());
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
