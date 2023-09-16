"use strict";
/*/Q1. Install Node.js, TypeScript and VS Code on your computer.

//Ans: Already Installed


//Q 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
///would you like to learn some Python today?”

var userName:string = "PIAIC";
var massage:string = "Hello Class welcome to all of you in AI World"
console.log(userName,massage);
//Q 03. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var _name = "Ali Zar";

console.log("Lower case",_name.toLowerCase());
console.log("Upper case",_name.toUpperCase());
console.log("Title case ",_name.toString());

//Q 04. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
//following, including the quotation marks:



var quote1:string = `"I insist you to strive. Work, Work and only work for satisfaction with patience, humbleness and serve thy nation".`
console.log("Quaid-e-Azam Said",`${quote1}`);
//Q 05. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person:String = "Quaid-e-Azam"
var message:string = `"I insist you to strive. Work, Work and only work for satisfaction with patience, humbleness and serve thy nation".`
console.log(`${famous_person},${message}`);
//Q 06. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var personeName:string = "\t   Ali Zar   \n";
console.log("Name with white spaces",personeName);
var strippingName:string = personeName.trim();
console.log("stripper Name",strippingName);

//NQ 07. umber Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
var a:number=1;
var b:number=2;
var c:number=3;
var d:number=4;
var e:number=12;
var f:number=16;
//Addition
console.log(d+c+a);
//subtraction
console.log(f-d-c-a);
//multiplication
console.log(b*d);
//division
console.log(f/b);
// Q 08. You should create four lines that look like this:

//_____________________________________________

//console.log(5 + 3)

//_____________________________________________

//Your output should simply be four lines with the number 8 appearing once on each line.

const num= 4
for (let index = 0; index < num; index++) {
  
  console.log(`             ${3+5}                     `);
  console.log("--------------------------------------");
  
    
}
// Q 09. Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.

var favoritNumber:number = 72;
//favoritNumber = "Prinit my fvrt number that is  72";
console.log(favoritNumber);
//Q 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//If you don’t have anything specific to write because your programs are too simple at this point, just add your name and
//the current date at the top of each program file. Then write one sentence describing what the program does.
var num1:number= 15;
var num2:number = 5;
var result = num1 / num2 ;
//above program is dividing  15 / 5
console.log(result);
var simplePogram = " Hello "
//Ali zar 05/09/2023
console.log(simplePogram);
// Q 11. Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friendsName  = ["Ali raza","Mohsin","Chaman","Bilal","zain"]
console.log(friendsName[0]);
console.log(friendsName[1])
console.log(friendsName[2]);
console.log(friendsName[3]);
console.log(friendsName[4]);
//Q 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them. The text of each message should be the same, but each message should be personalized
//with the person’s name.
console.log(friendsName[0],"Hello how are you");
console.log(friendsName[1], "Hello how are you")
console.log(friendsName[2],"Hello how are you");
console.log(friendsName[3],"Hello how are you");
console.log(friendsName[4],"Hello how are you");
//Q .13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
//that stores several examples. Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”
let myArray:string []= ["honde 125","Honda City"]
 console.log(`i have used, ${myArray[0]} bike for field visit as Field Officer in HBL`);
 console.log(`we used Office ${myArray[1]} car for out station  field visits `);
 //Q .14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 //Make a list that includes at least three people you’d like to invite to dinner.
 //Then use your list to print a message to each person, inviting them to dinner.
 //Q .15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 //start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.*/
let guest = ["Ali Raza", "shahid Abbas", "Aamir", "Adeel",];
/*///invite Three guests
for (let index = 0; index < guest.length; index++) {
 
  console.log([index],"please its inform you that ,come to my home tomorrow for dinner");
  
}
//// Ali raza Can't make it
console.log(`${guest[0]}`," Can't make it ");
////remove Ali Raza And Add Karam Elahi
guest.splice(0,1,"Karam Elahi")
//// updated Array
console.log(guest);
//// invite Karam Elahi
console.log(`${guest[0]} please its inform you that ,come to my home tomorrow for dinner `);
////second set of invitation messages, one for each person who is still in your list
for (let index = 0; index < guest.length; index++) {
  console.log([index],"please its inform you that ,come to my home tomorrow for dinner");
  
}
//Q 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

//Add one new guest to the beginning of your array.

guest.unshift("Zayan")
console.log(guest);
//• Add one new guest to the middle of your array.
guest.splice(2,0,"Al e Ahmad")
console.log(guest);
//• Use append() to add one new guest to the end of your list.
guest.push("Haider")
console.log(guest);
for (let index = 0; index < guest.length; index++) {
  console.log(guest[index],"Please Come to My Home tomorrow for dinnner");
    
}
//Q. 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
//shrink list
var shrinklist = guest.forEach((element)=>{
if (guest.length>2) {

  console.log([element],"you’re sorry i can invite only two persons for dinner.");
}
})
//Remove guests from list
while (guest.length> 2) {
  let removeGuests= guest.pop()
  console.log(`sory ${removeGuests} you are not invited on dinner`);
}
console.log(guest);

//Print a message to each of the two people  still on your list.
guest.forEach((guest)=>{
  console.log(guest,"you are invited at dinner");
  
})
 
//Remove the last two names from your list,
guest.pop();
guest.pop();
 console.log("empty list at the end of your program",guest);
 //Q .18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var visitPlace = ["Makha","Madina","Najaf","Karbala","Sham"]
 // • Print your array in its original order.
console.log(visitPlace);
// • Print your array in alphabetical order without modifying the actual list.
var alphabeticalArray = [...visitPlace].sort();
console.log(alphabeticalArray);
// • Show that your array is still in its original order by printing it.
console.log( visitPlace);
// • Reverse the order of your list. Print the array to show that its order has changed.
var reverseArray = [...visitPlace].reverse();
console.log(reverseArray);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(visitPlace);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(visitPlace.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(visitPlace.reverse());
// Q .19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.
console.log("Guest invited in 1st Array",guest.length);
//Q .20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
// cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languagesList:string[]=["Urdu","English","Araabic","Hindi","Chaines","japnies"];
for (let index = 0; index < languagesList.length; index++) {
    
    console.log(languagesList[index])};
    //Q . 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let country = {
name:"pakistan",
area: 796096,
cities:200,
Capital: "Islamabad",
}
let country2 = {
  name: "england",
  Area: 986750,
  cities: 76,
  capital: "London",
}
console.log(country,country2);

//Q .22 Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.
//Q .23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Q .24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

• Test whether an item is not in a array
//Q .25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and
// assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned
// 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no
//   output.)
let alien_color = ["red","Green","yellow"];
if (alien_color.includes("Green")) {
  console.log("you just earned 5 Points");
  
}
let result = ["pass","fail"];
if (result.includes("pass")) {
  console.log("test pass");
  if (!result.includes("fail")) {
    console.log("test fail");
    
  }
}
//Q .26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block

if (alien_color.includes("Green")) {
  console.log("player just earned 5 points for shooting the alien");
  
  }
   
    else{
console.log("Player just earn 10 points");

  }
//Q . 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

///• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

if (alien_color.includes("Green")) {
  console.log("player earned 5 points");
}
if (alien_color.includes("yellow")) {
  console.log("player earned 10 points");
}
if (alien_color.includes("red")) {
  console.log("player earned 15 points");
  
}
//Q. 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
// and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

///• If the person is age 65 or older, print a message that the person is an elder.
var age = 14;
if (age>=0 && age <2) {
  console.log("baby");
}
else if (age >=2 && age<4) {
console.log("toddler");
}
else if (age >=4 && age<13 ) {
  console.log("kid");
}
else if (age >= 13 && age<20) {
console.log("teenager");
}
else if (age >= 20 && age < 65) {
  console.log("adult");
}
else{
  console.log("person is an elder");
  
}
//Q .29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that
//check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits:string []= ["PineApple", "Mango","Orange","Apple","Banana"];
if (favoriteFruits.includes("PineApple")) {
  console.log("your Favorite Fruit is PineApple  ",);
}


if (favoriteFruits.includes("Mango")) {
  console.log("your Favorite Fruit is Mango ");
}
if (favoriteFruits.includes("Ornge") ){
  console.log("your Favorite Fruit is Orange ");
}
if (favoriteFruits.includes("Apple")) {
  console.log("Your Favorit Fruit is Apple");
}
if (favoriteFruits.includes("Banana")) {
 console.log("You really like bananas!");
  
}
//Q .30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
//that will print a greeting to each user after they log in to a website. Loop through the array,
//and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames = ["Admin","Adeel","Bilal","Abu Huraira","Naveed"]

for (let index = 0; index < userNames.length; index++)
  if (userNames[index]== "Admin") {
    console.log('Hello admin, would you like to see a status report?');
  }
  else if (userNames[index] != "admin") {
    console.log("hello", userNames[index], "thank you for logging in again.");

  }
// // Q.31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
  let userList = ["Ali","Bilal","Mohsin","Zayan","Akbar"]
  for (let index = 0; index < userList.length; ) {
    userList.pop()
  }
  if (userList.length == 0) {
    console.log("We need to find some users!");

  }
// //Q. 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_Users = ["Ali","Raza","Adeel","Bilal","Mohsin"]
let new_Users = ["karam Elahi","Ahmad","Adeel","Ali","Zeeshan"]
for (let index = 0; index < new_Users.length; index++) {
  if (current_Users.includes(new_Users[index])) {
    console.log("Sorry this user name is  already exist");
  }else{
    console.log(`${new_Users[index]},"user name is available`);
    
  }
}
//Q .33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
let $number = [1,2,3,4,5,6,7,8,9]
for (let index = 0; index < $number.length; index++) {
if ($number[index]== 1) {
  console.log("1st");
  
}
else if ($number[index]==2){
  console.log("2nd");
}
else if ($number [index]== 3){
  console.log("3rd");
}
else if($number[index] == 4){
  console.log("4th");
}
else if($number[index]== 5){
  console.log("5th");
}
else if ($number[index]== 6){
  console.log("6th");
}
else if ($number[index]== 7){
  console.log("7th");
}
else if($number[index]== 8){
  console.log("8th");
}
else if ($number[index]==9){
  console.log("9th");
}*/
//Q. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzasName = ["kabab stuffer", "Malai Booti", "Cheese Pizza"];
for (let index = 0; index < pizzasName.length; index++) {
    console.log(pizzasName[index]);
    console.log(`I like ${pizzasName[index]}`);
}
console.log(`A classic Italian pizza made with tomato sauce, mozzarella cheese, and fresh basil leaves.
A pizza topped with tomato sauce, cheese, and pepperoni slices.
A pizza topped with tomato sauce, cheese, ham, and pineapple chunks.
I really love pizza!`);
