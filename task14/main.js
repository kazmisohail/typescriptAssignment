var names = ["Ali", "Abbas", "Ahmed"]; // array to store multiple data
var i = 0;
var s = names.length; // length function to find the size of an array
for (i = 0; i < s; i++) {
    console.log("Hi " + names[i] + ", I am inviting you for a dinner tonight.");
}
console.log("\n " + names[2] + " is unable to join us at dinner.\n");
names[2] = "Haider";
for (i = 0; i < s; i++) {
    console.log("Hi " + names[i] + ", I am inviting you for a dinner tonight.");
}
console.log("\nI have found a big dinner table!\n");
names.unshift("Ahmed"); // add at the begining of array
names.splice(2, 0, "Qasim"); // add in the middle of array
names.push("Anwar"); // add at the end of array
for (i = 0; i < names.length; i++) {
    console.log("Hi " + names[i] + ", I am inviting you for a dinner tonight.");
}
