let age = 16;  //for loop
for(let num=0; num <= age; num++){
    console.log("you're still a minor.", num)
}
//while statement
let myAge =20, agelimit=25;
while (myAge < agelimit) {
    console.log("Am young", myAge)
    myAge +=1
}

let age1 =1;
while (age1 < myAge) {
    console.log("New Year New Me")
    age +=1
    if (age1 ==6) break;
}

// do {
//     console.log("hi");
// }
//  while (age1==1); //will cause an infinity loop

age =1  //do while statement
 do {
    console.log("hi");
    age +=1

}
 while (age==1);

 while (age<10) {
     console.log('new me')
     age +=1

     if(age ==6) continue
 }
