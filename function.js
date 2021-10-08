function greetme() {
    console.log('Hello Daphne')
}
greetme()  //calling the function or invoke the function

//function parameter
function greetmeDyanamic(name){
    console.log('hello', name, '!')
}
greetmeDyanamic("Daphne")
greetmeDyanamic("Nalule")

function calculatemyage(yearofbirth){
    let currentyear = new Date().getFullYear();
    console.log('current year' , currentyear) //display current year
    myage = currentyear - yearofbirth;
    return myage
}

function displaymyage(name, yearofbirth){
    let age =calculatemyage(yearofbirth);
    message ="Your name is " + name + " and your age is " + age;
    console.log(message)
}
//call the function
displaymyage("Nalule", 1999)
//changing to uppercase
function ChangeCase(capitalise,name){
    return capitalise(name);
}

function capitalise(name){
    if (name) return name.toUpperCase();
    return
}

let myName = ChangeCase(capitalise, "Daphne");
console.log(myName)