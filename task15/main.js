var names = ["Ali", "Abbas", "Ahmed"]; // array to store multiple data
var i = 0;
var s = names.length; // length function to find the size of an array
// inviting guests for dinner
for (i = 0; i < s; i++) {
    console.log("Hi " + names[i] + ", I am inviting you for a dinner tonight.");
}
console.log("\n " + names[2] + " is unable to join us at dinner.\n");
// replacing one guest with other
names[2] = "Haider";
for (i = 0; i < s; i++) {
    console.log("Hi " + names[i] + ", I am inviting you for a dinner tonight.");
}
console.log("\nI have found a big dinner table!\n");
// appending guests array
names.unshift("Ahmed"); // add at the begining of array
names.splice(2, 0, "Qasim"); // add in the middle of array
names.push("Anwar"); // add at the end of array
for (i = 0; i < names.length; i++) {
    console.log("Hi " + names[i] + ", I am inviting you for a dinner tonight.");
}
console.log("\nYou can invite only two guests for dinner!\n");
// removing guests, only two guests can be invited
for (i = 0; i < names.length - 2; i++) {
    names.pop[i];
    console.log("Sorry " + names[i] + ", I can't invite you for a dinner tonight.");
}
console.log("\n");
// inviting two guests left in the list
for (i = names.length - 2; i < names.length; i++) {
    console.log("Hi " + names[i] + ", you are still invited for a dinner tonight.");
}
// removing all guests
for (i = 0; i < names.length; i++) {
    names[i] = names.pop[i];
}
// guests list is empty now
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}
