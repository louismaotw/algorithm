//Save thy toys

/*Algorithm: 參考CloudKaksha
Now, we use bottom-up DP and move through the array A from right to left i.e. from n−1 to 0.
Let us see what decisions you can take while choosing a toy at the ‘i’th position.

He chooses one toy in the sequence. So, in this case, the maximum money that Leonard can get is:
value of the i item + max money he can get from the items from positions n−1 to i+2
= val[i]+dp[i+2]
We choose i+2 here because i+1 item will be selected by Sheldon.
Hence, the previous item selected by Leonard was the i+2 item.
He chooses two toys in the sequence. So, in this case, the maximum money that Leonard can get is:
value of the i item + value of i+1 item + max money he can get from the items from positions n−1 to i+4
= val[i]+val[i+1]+dp[i+4]
We use i+4 here because i+2,i+3 are chosen by Sheldon.
Hence, the previous item selected by Leonard was i+4,i+5. (take the first one in the two items).
3. Similarly, extend the logic to selection of three items.

Now, the maximum of the three cases will be dp[i].
*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");

var cache = {};


function choose(arr, n) {
    console.log(arr);
    var val = [];
    var dp = [];
    var arr_dp = [];
    var best_dp = [];
    for (var i = 0; i< arr.length; i++) {
        val[i] = arr[i];
    }
    for (var i = 0; i < n + 7; i++) {
        dp[i] = 0;
    }
    console.log(val);
    for (var i = n - 1; i >= 0; i--) {
        var best_dp_ele1 = [], best_dp_ele2 = null;

        dp[i] = val[i] + dp[i + 2];
        best_dp_ele1.push(val[i]);
        best_dp_ele2 = i + 2;

        if (i + 1 < n) {
            //dp[i] = Math.max(dp[i], val[i] + val[i + 1] + dp[i + 4]);
            if (dp[i]<val[i] + val[i + 1] + dp[i + 4]) {
                dp[i] = val[i] + val[i + 1] + dp[i + 4];
                best_dp_ele1 = [];
                best_dp_ele1.push(val[i]);
                best_dp_ele1.push(val[i + 1]);
                best_dp_ele2 = i + 4;
            }
           
        }
        if (i + 2 < n) {
            //dp[i] = Math.max(dp[i], val[i] + val[i + 1] + val[i + 2] + dp[i + 6]);
            if (dp[i]<val[i] + val[i + 1] + val[i + 2] + dp[i + 6]) {
                dp[i] = val[i] + val[i + 1] + val[i + 2] + dp[i + 6];
                best_dp_ele1 = [];
                best_dp_ele1.push(val[i]);
                best_dp_ele1.push(val[i + 1]);
                best_dp_ele1.push(val[i + 2]);
                best_dp_ele2 = i + 6;
            }       
        }
        best_dp[i] = [];
        best_dp[i].push(best_dp_ele1);
        best_dp[i].push(best_dp_ele2);
        console.log("i: " + i);
        console.log(best_dp[i]);
        console.log("dp:" + dp);
    }

    show_result_seq(best_dp);

    return dp[0];
   
}

function show_result_seq(dyp) { //dyp: dynamic programming
    var res = [];
    var len = dyp.length;
    var index = 0;
    while (index <= len - 1) {
        for (var i = 0; i < dyp[index][0].length; i++) {
            res.push(dyp[index][0][i]);
        }
        index = dyp[index][1];
    }
    console.log(res);
}

//var ARR=[10,8,7,11,15,20];
var ARR = [5, 4, 3, 2];
var len=ARR.length
console.log("result:" + choose(ARR, len));
