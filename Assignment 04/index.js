"use strict";
////1.create a function that takes an array an index and a value as perameters. inside the functon use the splice method to insert the value  at the specified index in the  array. return the modified array.
// let array:number[] = [1,2,3,4,6,8];
// let index:number = 5;
// let value:number = 7;
// function arrayIndexValue(array:number [],index:number,value:number)
// {
//     array.splice (index,0,value)
//     return array
// }
// var modifyArray:number[]=arrayIndexValue(array,index,value)
// console.log(modifyArray);
////
//2.implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//Create functions to add items
// let shoppingAddCart:string[] = ["Fruits","Vegitable","stationary"]
// shoppingAddCart.splice(2,0,"eggs");
// console.log("add Item",shoppingAddCart);
// //Create functions to remove items
// let shoppingRemovecart:number[]= [15,1122,103,1218]
// shoppingRemovecart.splice(0,1,111)
// console.log("remove",shoppingRemovecart);
// //Create functions to update quantities 
// let updateQuantities:string[]= ["chair","table","fan","oven,LCD"]
// updateQuantities.splice(4,0,"wall clock","lights")
// console.log("update",updateQuantities);
//// 3.Write a program that uses a while loop to print the first 25 integers.
// let num:number = 1;
// while (num<=25) {
//     console.log(num);
//     num++
// }
////4.Write a program that uses a while loop to print the first 10 even numbers
let i = 1;
while (i <= 10) {
    let result = i * 2;
    console.log(i);
    i++;
}
