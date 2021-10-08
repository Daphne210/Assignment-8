console.log("Welcome to JS")
//variables
var name;

myname ="Daphne";
age =21
let country;
country ="Uganda";
console.log(myname,age,country)

country ="Kenya";
console.log("country")
let temperature =29.5;
console.log(temperature)
let countryname ="Uganda"
console.log(countryname)
countryname ="TZ";
console.log(countryname)
/*const TEMP_IN_DEG_CELCIUS =29.8;
typeof TEMP_IN_DEG_CELCIUS*/
const month ="May";
console.log(month)
let name1 ="Daphne";
console.log("My name is", name1)
let intro ="My name is" + name1;
function sayhello() {
    let age =24;
    let age2 =35;
    let myname ="Nalule daphne";
    console.log(myname,age,age2)

}
sayhello()
console.log(myname,age)

//let someVar ="somevalue";
let num1=2, num2=2;
console.log(num1 == num2) //equal to

let year =2020;
console.log(year)
console.log(year +=1) //increment by 1
console.log(year +=3)

let savings =7200000; //division
console.log(savings /=60)

let num =5; //square of a number
console.log(num **2)
let car =39;
console.log(car <=20)

age >89 ? console.log('hi') : console.log('hello');  //tenary 

let name2 = "Drake"; //if condition
if (name2 =="Daphne"){
    console.log("You are welcome!")
} else {
    console.log("You don't belong here")
}

let yearofbirth =2005; //nested if
if(yearofbirth <1999){
    console.log("you are millenial")
}
else if(yearofbirth >1999 && yearofbirth <2002){
    console.log("You are millenial too")
}
else{
    console.log("you are dot com")
}

switch(yearofbirth){  //switch case
    case 2001:
    console.log("hi")
    break
    case 2004:
        console.log("hello")
        break
    default:
        console.log("What's up")    
}

yearofbirth < 2021 ? console.log("hi") : console.log("hello")
yearofbirth > 2021 ? console.log("hi") : console.log("hello")