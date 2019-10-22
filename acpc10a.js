/*SPOJ: ACPC10A, What's next.
Problem: Given three successive members of a sequence, 
you need to determine the type of the progression and the next successive member.

Algorithm: 

*/
//
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

/*

*/
function acpc10a(a,b,c) {
    if ((b - a) == (c - b)) {
        console.log("AP " + (c + (c - b)));
    }
    else if (b !=0 && a != 0 && (c / b) == (b / a)) {
        console.log("GP " + (c / b) * c);
    }
};
 

acpc10a(4, 7, 10);
acpc10a(2, 6, 18);
