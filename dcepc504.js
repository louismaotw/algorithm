//The Indian Connection

/*Algorithm:
Set N==0 && k==0 as the base case, and return ¡¥M¡¦ for it.
calculate value of parent of the given element by dividing K by 2
Get the answer for (Upper level (i.e. N-1), Parent (i.e. K/2))
if parent*2 == K, then we have our answer,
else we switch the answer to F if M and M if F.
*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var i = 0;
var cache = {};

function IndianC(n,k) { //nth generation, kth child. 1-base.
    i++;
    if (!k && !n) { //base case
        return 'M';
    }
    var parent =Math.floor( k / 2);
    var ans = IndianC(n - 1, parent);
    if (parent != (k / 2)) {
        if (ans == 'M')
            ans = 'F';
        else
            ans = 'M';
    }
    return ans;
}

var n = 10000;
var k = 10;

var final;
try{
    final=IndianC(n-1,k-1);
}
catch (ex) {
    console.log('i= ' + i + " error:" + ex);
}
console.log("Final: " + final);
