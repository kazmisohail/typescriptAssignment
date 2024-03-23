/* Q-23
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var city = "Karachi";
console.log("Is city == 'Karachi'? I predict True.");
console.log(city == "Karachi");
console.log("Is city starts with 'K'? I predict True.");
console.log(city[0] == 'K');
console.log("Is city ends with 'i'? I predict True.");
console.log(city[city.length - 1] == 'i');
console.log("Is city has 7 characters? I predict True.");
console.log(city.length == 7);
console.log("Is 2nd character of city is 'a'? I predict True.");
console.log(city.indexOf('a') == 1);
console.log("-------------------------");
console.log("Is city == 'Lahore'? I predict False.");
console.log(city == "Lahore");
console.log("Is city starts with 'L'? I predict False.");
console.log(city[0] == 'L');
console.log("Is city ends with 'e'? I predict False.");
console.log(city[city.length - 1] == 'e');
console.log("Is city has 6 characters? I predict False.");
console.log(city.length == 6);
console.log("Is 2rd character of city is 'h'? I predict False.");
console.log(city.indexOf('h') == 1);
