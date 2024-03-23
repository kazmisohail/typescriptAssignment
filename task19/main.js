/* Q-21
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
var language1 = { language: "English", country: "USA" };
var language2 = { language: "Urdu", country: "Pakistan" };
var language3 = { language: "Arabic", country: "Arab" };
var languages = [language1, language2, language3];
var i;
console.log("\tList of Languages");
console.log("------------------------------");
for (i = 0; i < languages.length; i++) {
    console.log("Language : " + languages[i].language);
    console.log("Country : " + languages[i].country);
    console.log("------------------------------");
}
