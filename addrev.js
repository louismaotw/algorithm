/*SPOJ: ADDREV, Adding reversed numbers.
Problem: Your task is to add two reversed numbers and output their reversed sum. 
Of course, the result is not unique because any particular number is a reversed form of several numbers
(e.g. 21 could be 12, 120 or 1200 before reversing). Thus we must assume that no zeros were lost by reversing 
(e.g. assume that the original number was 12).

Algorithm: 
1. Reverse both numbers.
2. Add reversed numbers.
3. Reverse and Print the result.

*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

/*

*/
function addrev(a,b) {
    var ar = 0, br = 0;
    var rem;
    while (a) {
        rem = a % 10;
        ar = ar * 10 + rem;
        a = Math.floor(a / 10);
    }

    while (b) {
        rem = b % 10;
        br = br * 10 + rem;
        b = Math.floor(b / 10);
    }

    ar += br;
    br = 0;

    while (ar) {
        rem = ar % 10;
        br = br * 10 + rem;
        ar = Math.floor(ar / 10);
    }

    console.log(br);
};
 

addrev(4358, 754);
addrev(305, 794);
