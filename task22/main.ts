/* Q-24
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

let city = "Karachi";

console.log("Is city == 'Karachi'? I predict True.");
console.log(city == "Karachi");

console.log("Is city != 'Karachi'? I predict False.");
console.log(city != "Karachi");

let country = "South Korea";

console.log("Is country.toLowerCase() == 'south korea'? I predict True.");
console.log(country.toLowerCase() == "south korea");

console.log("Is country.toLowerCase() != 'south korea'? I predict False.");
console.log(country.toLowerCase() != "south korea");

console.log("-------------------------");

let num = 15;

console.log("Is number == 15? I predict True.");
console.log(num == 15);

console.log("Is number > 15? I predict False.");
console.log(num > 15);

console.log("Is number <= 15? I predict True.");
console.log(num <= 15);

console.log("Is number > 10 and < 20? I predict True.");
console.log(num > 10 && num < 20);

console.log("Is number > 10 or == 15? I predict True.");
console.log(num > 10 || num == 15);

console.log("-------------------------");

var cities = ["Karachi", "Skardu", "Islamabad"];

console.log("Is 'Karachi' is in array? I predict True.");
console.log(cities.includes("Karachi")); // --target es2016

console.log("Is 'Lahore' is in array? I predict False.");
console.log(cities.includes("Lahore"));