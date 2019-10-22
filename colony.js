//Linearian Colony

/*Algorithm:
Year 0: R
Year 1: BR
Year 2: RBBR
Year 3: BRRBRBBR
Year 4: RBBRBRRBBRRBRBBR
*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var i = 0;
var cache = {};

function colony(n,k) { //n:year, k:position, 0-base
    i++;
    if (!k && !n) { //base case, true while (k=0 and n=0) 
        return 'R';
    }
    var half = Math.pow(2, n - 1);
    var pos = k - half;
    if (pos >= 0) {
        return colony(n - 1, pos);
    }
    else {
        var tmp = colony(n - 1, k);
        var tmp2 = (tmp == 'R' ? 'B' : 'R');
        //console.log(tmp2);
        return tmp2;
    }
}

var n = 51;
var k = 123456789012345;

var final;
try{
    final=colony(n,k);
}
catch (ex) {
    console.log('i= ' + i + " error:" + ex);
}
console.log("FINAL: " + final);
