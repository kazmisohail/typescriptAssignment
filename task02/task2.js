var myName = "sohAil";
console.log("Lowercase : " + myName.toLowerCase());
console.log("Uppercase : " + myName.toUpperCase());
var titleCase = myName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1).toLowerCase(); }).join(" ");
// For title case, we split the string and make first character in upper case and remaining in lower case
console.log("Titlecase : " + titleCase);
