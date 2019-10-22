/*SPOJ: ARRAYSUB, subarrays
Problem: Given an array, and a number K, we need to print the maximum value in all the sub-arrays of size K.

Algorithm:

*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function arraysub(arr) { //
    var res = [];
    var flag_start = true,flag_end = false;
    for (var i = 0; i < arr.length; i++) {
        var max = 0;;
        for (var j = 0; j < 4; j++) {
            if (arr[i + j] == undefined) {
                flag_end = true;
                break;
            }
            if (arr[i+j] > max) {
                max = arr[i+j];
            }
        }
        if (max>0 && flag_end==false) {
            res.push(max);
        }
        if (max > 0 && flag_end == true && flag_start==true) {
            res.push(max);
        }

        if (flag_end == true)
            break;
        flag_start = false;
      
    }
    console.log(res);
}

function arraysub2(arr) {
    var k = 4;
    var len = arr.length;
    var MaxPos = -1;
    var res=[]; //result array
    var findMaxOfSub = function (start, end) {
        var maxV = arr[start];
        for (var i = start + 1; i <= end; i++) {
            if (maxV < arr[i]) {
                maxV = arr[i];
                MaxPos = i;

            }
        }
        return maxV;
    };
 
    var calulate = function () {
        var maxV = findMaxOfSub(0, k - 1);
        res.push(maxV);
        for (var i = k; i < len; i++) {
            if (MaxPos > i - k) {
                if (arr[i] > maxV) {
                    maxV = arr[i];
                    MaxPos = i;
                }
            }
            else {
                maxV = findMaxOfSub(i - k + 1, i);
            }
            res.push(maxV);
        }
        console.log(res);
    };
    calulate();
}

//var test = [4, 1, 1, 9];
//var test = [1, 2, 3, 4, 5];
var test = [9, 1, 8, 2, 7, 3, 6, 4, 5, 15, 17];
//var test = [10, 15];


var final;
try{
    final=arraysub2(test);
}
catch (ex) {
    console.log("error:" + ex);
}
console.log("FINAL: " + final);
