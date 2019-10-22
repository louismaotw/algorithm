/*LIS : Longest Increasing Subsequence
    Given a sequence,find the longest subsequence such that all the elements in the subsequence are in a sorted order.
    lis2，另一種快速的運算法。
/*
    T[]: minimum of the last value of the increasing subsequences of particular length.
    If you get a higher number on the right side we can use this information to figure out how big the increasing subsequence will be.
*/

//填表
var Stack = require("./Stack.js");
var stack = new Stack();

function lis2(arr) {
    console.log('**** LIS 2 *****');
    console.log(arr);
    var T = [];
    var F = [];//在這個位置(和T陣列搭配)，最長subsequence是從哪一個位置的元素來的。
    var len = 0;
    for (var i = 0; i < arr.length; i++) {
        F[i] = -1;
    }
    T[0] = 0;
    for (var i = 1; i < arr.length; i++) {
        var x = T[T.length - 1];
        if (arr[i] > arr[x]) {
            T.push(i);
            F[i] = x;
            len += 1;
            continue;
        }
        var flag_c = false;
        for (var j = 0; j<T.length; j++) {
            if (arr[i] < arr[T[j]]) {
                T[j] = i;
                if (T[j - 1] != undefined)
                    F[i] = T[j - 1];
                flag_c = true;
                break;
            }
        }
        if (flag_c == true) {
            continue;
        }
    }
    console.log(T);
    console.log(F);

    var res = [];
    var chk = T[T.length - 1];

    do{
        res.unshift(arr[chk]);
        chk = F[chk];
        }
    while(chk != -1);
    console.log(res);
}

function lis(arr) {
    console.log('****************');
    console.log(arr);
    var T = [];
    var From = [];
    for (var i = 0; i < arr.length; i++) {
        T[i] = 1;
        From[i] = -1;
    }
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                if (T[i] < T[j] + 1) {
                    T[i] = T[j] + 1;
                    From[i] = j;
                }
            }
        }

    }
    console.log(T);
    console.log(From);
    var max = T[0];
    var chk=0;
    for (var i = 1; i < T.length; i++) {
        if (T[i] > max) {
            max = T[i];
            chk = i;
        }
    }
    console.log(max);

    var res = [arr[chk]];;
    chk = From[chk];
    do{
        res.unshift(arr[chk]);
        chk=From[chk];
    }
    while(chk != -1)
    
    console.log(res);
}

var input1 = [3,4,-1,0,6,2,3];

//lis(input1);

var input2 = [2, 5, 1, 8, 3];
//lis(input2);

var input3 = [3, 4, -1, 5, 8, 2, 3, 12, 7, 9, 10];
lis(input3);
lis2(input3);
