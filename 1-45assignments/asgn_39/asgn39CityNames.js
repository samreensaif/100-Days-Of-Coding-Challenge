// 39. City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_Country(cityName, countryName) {
    return "".concat(cityName, ", ").concat(countryName);
}
var cc1 = city_Country("Lahore,", "Pakistan");
var cc2 = city_Country("Delhi,", "India");
var cc3 = city_Country("Chicago,", "USA");
console.log(cc1);
console.log(cc2);
console.log(cc3);
