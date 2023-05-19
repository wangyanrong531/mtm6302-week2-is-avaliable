//console.log("JS file included!")
/* 
the above line of code is commented our using a signle lone comment, the the shotcut is control +/or command +/

This comment is a multiline comment, shotcut is shift+alt+A or shift+ option +A */

let myName="Yanrong"
console.log(myName)
myName="Riley Wang"
console.log(myName)

const address="Earth"
console.log(address)

//  address="Earth, Milkway" wrong value//

//let myProfession//
//console.log(myProfession)  undefined //

let myProfession
myProfession="Professor"
console.log(myProfession)

const myScore=[56, 76, 98]
console.log(myScore[1])

let num =10 
num += 2
console.log(num)
//number is 12 right now//

//===will check if the value and data types are both matching
console.log(num== "12")

//加了“”的12 ， 还是会出现true， stream ，

//> is  simple grater than comparison
console.log(num> 90)

//!== will be true if the two sides are not equal//
console.log(num!==90)

//!in front of an expression will negate the result of the expression
console.log(!(num!==90)) //--gonna change to false 相反的结果//
//！ 是相反的意思，加上了就会产生相反的结果// 

//the && logical operator will be true if all of the conditions are met//
console.log(num >= 7 && num !== 12)

//the || logical operator will be true if any of the conditions are met//
console.log(num >=7 || num !== 12)


console.log(num.toFixed(2))

numA='1'
numB=1
//adding a string with a number will result in concatenation//
console.log(numA+numB)
//parsing the string using parseInt and then adding to a number will result in a number//
console.log(parseInt(numA)+numB)

const pets=2;
const pet1Name="Sinba"
const pet2Name="Bufi"
console.log("I have " + pets +" dogs," + pet1Name + " & " + pet2Name)

console.log(`I have ${pets} dogs, ${pet1Name} & ${pet2Name}`)