//aibohp:Aibohobia 

//LCS : Longest Common Sequence
//{3,4,6,7,8}, {3,5,7,7,8}

/* quote from CloudKAKSHA (Spoj AIBOHP solution).
First input the string S, take its reverse ¡¥Sr¡¦ and find the length of the longest palindromic subsequence.
Find the difference, S.length() ¡V LCS(S , Sr)
The value obtained above is the answer.
Only those characters that are not included in the Longest Palindromic Subsequence, need their counterparts to be inserted. thus, our final answer is correct. (keep in mind that we can only insert and not delete any character).
*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var str_length;

var cache = {};

function coins(n) {
    n = Math.floor(n);
    if (n == 0) {
        return 0;
    }
    else if(!cache[n]){
        cache[n] = Math.max(n, coins(n / 2) + coins(n / 3) + coins(n / 4));
        console.log(n + "--" + cache[n]);
    }

    return cache[n];
}

console.log("Final: " + coins(100));
