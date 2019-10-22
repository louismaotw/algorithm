/*SPOJ: GAMES, how many games
Problem: 
A player has played unknown number of games. We know the average score of the player 
(sum of scores in all the games / no. of games). 
Find the minimum number of games the player should have played to achieve that average.
The player can score any non-negative integer score in a game.

Algorithm:
Here we need to convert the given rational number into fraction. 
We find the denominator, and numerator, then find the GCD of numerator and denominator,
Then denominator/GCD is the required answer.
*/

var Stack = require("./Stack.js");
//var stack = new Stack();
var Queue = require("./Queue.js");
var Graph = require("./Graph.js");
var cache = {};


function games(str) {
    var int_p = 0; //integer part
    var dec_p = 0; //decimal part
    var no1=0, no2=0;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        /*substr() is similar to slice().
        The difference is that the second parameter specifies the length of the extracted part. */
        var s = str.substr(i, 1);
        if (s == '.')
            break;
        no1++;
        var zero = '0';
        var diff = s.charCodeAt(0) - zero.charCodeAt(0);
        int_p = int_p * 10 + diff;
    }

    var idx = str.indexOf("."); //璝常⊿Τт计翴穦-1计翴ぃ穦瞷材0
    if (idx > 0) {
        for (var i = idx+1; i < len; i++) {
            var s = str.substr(i, 1);
            no2++;
            var zero = '0';
            var diff = s.charCodeAt(0) - zero.charCodeAt(0);
            dec_p = dec_p * 10 + diff;
        }
    }

    var den = Math.pow(10, no2);
    var num = int_p * (Math.pow(10, no1)) + dec_p;    
    console.log(num + " / " + den);
    
    var res = den / GCD2(num, den);
    console.log(res);
}

function GCD(a, b) { //程そ计
    return b == 0 ? a : GCD(b, a % b);
}

function GCD2(a, b) {
    if (b == 0)
        return a;
    var tmp = a % b;
    return GCD2(b, tmp);
}



games("15.23");
