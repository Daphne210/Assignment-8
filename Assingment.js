function a(y){  //function in a function
    //let  =y;
    function b(z){
        //let func2 =z;
        return y+z;
    }
    return b;
}
console.log(a(4)(6));

function calculatemyage(yearofbirth){
    let currentyear = new Date().getFullYear();
    console.log('current year' , currentyear) //display current year
    myage = currentyear - yearofbirth;
    return myage
}

function displaymyage(name, yearofbirth){
    let age =calculatemyage(yearofbirth);
    message ="My name is " + name + " and my age is " + age;
    console.log(message)
}
//calling the function 5 times
displaymyage("Nalule Daphne", 1999)
displaymyage("Nsungwa Christine", 1998)
displaymyage("Musobya Trevor", 1990)
displaymyage("Nakato Daphne", 1997)
displaymyage("Kisitu Alfred", 1995)

let subtract =(a,b) =>{ //arrow function 
    let c = b-a;
    return c;
}
let subtract2 = (a,b)=> c;
console.log(subtract(2,10)) //display 8-2 result

let word = 19;  //for loop to run 19 times
for(let num=1; num <= word; num++){
    console.log("I Love You", num) //display I Love You
}