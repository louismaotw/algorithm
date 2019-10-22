/*LIS : Longest Increasing Subsequence
    Given a sequence,find the longest subsequence such that all the elements in the subsequence are in a sorted order.
/*
    if arr[j]<arr[i]
        T[i]=max(T[i], T[j]+1);
*/

//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();

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

lis(input1);

var input2 = [2, 5, 1, 8, 3];
lis(input2);
