/*SPOJ: CUBEFR, Cube Free Numbers.
Problem: Given an array, and a number K, we need to print the maximum value in all the sub-arrays of size K.

Algorithm:

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

/*
 A cube free number is a number who's none of the divisor is a cube number 
 (A cube number is a cube of a integer like 8 (2 * 2 * 2) , 27 (3 * 3 * 3) ). 
*/
function cubefr(n) {
    var size=1000000;
    var mark = [];
    for (var i = 2, k; (k = i * i * i) <= size; i++) {
        for (var j = k; j <= size; j += k) {
            //mark[j] = -1; //j這個數字是cube number
            if (! Array.isArray(mark[j])) {
                mark[j] = []; //mark[j]這個位置若不是陣列，就建立一個空陣列。
            }
            mark[j].push(i);

        }
    }
    var count=0;
    for (var i = 1; i <= size; i++) {
        //if (mark[i] != -1)
        // mark[i] = ++count;
        if (! Array.isArray(mark[i])) {
            mark[i]=++count;
        }
    }

    for (var i = 1; i <= n; i++) {
        //if (mark[i] == -1)
        //    console.log(i + " -cube");
        //else
        //    console.log(i + " - " + mark[i]);
        if (Array.isArray(mark[i]))
            //console.log(i + " -cube");
            console.log(i+ " - (" + mark[i] + ")");
        else
            console.log(i + " - " + mark[i]);
    }
};
 

cubefr(30000);
