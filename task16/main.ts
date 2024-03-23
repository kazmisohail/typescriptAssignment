var places = ["Turkey", "Russia", "Malaysia", "Spain", "Australia"];
let i = 0;

console.log("\nOriginal Order");
for (i = 0; i < places.length; i++) {
    console.log(places[i]);
}

console.log("\nPlaces in Alphabetical order");
// Alphabetical order
console.log(places.sort());

console.log("\nOriginal Order");
for (i = 0; i < places.length; i++) {
    console.log(places[i]);
}

console.log("\nReverse Alphabetical order");
// Reverse Alphabetical order
console.log(places.sort().reverse());

console.log("\nOriginal Order");
for (i = 0; i < places.length; i++) {
    console.log(places[i]);
}

let reverse = places.reverse();
// Reverse order
console.log("\nRevese Order");
console.log(reverse);

// Original order
console.log("\nOriginal Order");
console.log(reverse.reverse());
