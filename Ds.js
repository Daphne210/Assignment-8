// let cityName = new String(" My name is Daphne")
// console.log(cityName)
// console.log(cityName.anchor('name'))

let cityName = " My name is Daphne "
cityName = cityName.trimEnd()
// console.log(cityName);

function searchByCity (city) {
    return city ? city.startsWith('Kam') : false; //true if starts Kam or else return false
}

let check = searchByCity('Kampala')
console.log(check);
check = searchByCity('Jinja')
console.log(check);

let sampleStr = "a quick brown dog"

let dog = sampleStr.match('dog')
console.log(dog);
console.log(sampleStr[14]);

sampleStr = "A quick brown fox"
let fox = sampleStr.match('fox')
console.log(fox);

str = " Daphne Nalule "
console.log(str.length); //length of the string length
console.log(str.trim())
let myName = str;
myName = []
//myName = myName.split('')
console.log(myName);

//let firstName = myName[0]
// let firstName = "Daphne" *changing to uppercase
// firstName.toUpperCase();
// console.log(firstName);
let word ="A quick brown fox jumped over a lazy dog";
console.log(word);

fox = word.substr('fox jumped')
let word1 = word.match('fox jumped')
console.log(word1);

let word2 = word.substr(14, 10);
console.log(word2); //return fox jumped

let word3 = word.slice(31);
console.log(word3);  //return lazy dog

let word4 = word.slice(-4);
console.log(word4);  //return dog

let word5 = word.slice(-9,-4);
console.log(word5); //return lazy

//ARRAYS
let favoritefoods = [];
//favoritefoods = new array ()
//checking items
console.log(favoritefoods.length); //returns 0 since it's empty

favoritefoods.push("Chicken pie")
console.log(favoritefoods.length); //returns 1
console.log(favoritefoods);

let citiesinUganda = ["Kampala", "Mukono", "Jinja"]
console.log(citiesinUganda);
let Muk = citiesinUganda[1];
console.log(Muk);
citiesinUganda[2] = 'Masaka' //replace Jinja with Masaka
console.log(citiesinUganda);
let last = citiesinUganda[citiesinUganda.length-1]; //returns the last city in the list
console.log(last);
let fit = citiesinUganda.map(city => city.toUpperCase()); //changes the cities to uppeercase
console.log(fit);

for (let item = 0; item <= citiesinUganda.length; item++) { //looping over the array
    console.log([item]);  
}

cities = ['Kampala', 'Gulu', 'Wakiso'] //looping over the array (more sensible)
for (let  i=0; i<cities.length; i++) {
    console.log(cities[i]); 
}

cities.forEach(city => console.log(city))  //looping over the array using functions

for (let city of cities){ //looping over an array using for of
    console.log(city);
}

let city1 = cities.join();  //returns the array without spaces
console.log(city1);

console.log('Kampala,Gulu,Wakiso'.split(',')); //returns the array with spaces in between the commas

//  citiesinUganda.findIndex(city => city == 'Kampala'); return index of Kampala
// console.log(citiesinUganda);
// citiesinUganda.findIndex(function {name} { return name == 'Kampala})

let even =[2,4,6,8];
console.log(even);
let odd = [1,3,5,7];
console.log(odd);
let evenAndodd = even.concat(odd)
console.log(evenAndodd); //returns both arrays
evenAndodd.sort();
console.log(evenAndodd); //returns a sorted list of even and odd numbers in the array

let months = ["March", "Dec", "Apr", "Jun"]
months.sort();
console.log(months);

let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = (a,b) => a+b;
console.log(numbers.reduce(sum)); //returns the sum of the numbers array
console.log(numbers.includes(3)); //returns if 3 is in an array or else false
console.log(numbers.pop());  //removes the last element "10" from the array
console.log(numbers);
console.log(numbers.shift()); //removes the first element in the array
console.log(numbers);
console.log(numbers.unshift('10'));  //shifts 10 to position 0
console.log(numbers);
console.log(numbers.push('1'));
console.log(numbers);

// let index = 1;
// console.log('Using an index of {index} the item returned {citiesinUganda.at(index)}');

// const str = 'The quick brown fox jumped over a lazy dog.';
// console.log(str.slice(31));