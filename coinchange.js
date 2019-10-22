//Coin changing Minimum Coins

/* quote from Mr. Tushar Roy
T[i]=min(T[i], 1+T[i-coins[j]) if i>=coins[j]
Total=13, coins=7,2,3,6
建立兩個陣列，
陣列一：T[i}的元素為0~13(Total)，記錄遍歷過程中，最少可用硬幣數 
陣列二：F[i]的元素為-1，記錄遍歷過程中，i這個金額，最後的來源是哪個硬幣。
可用硬幣為conis[j]=[7,2,3,6]

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");

var cache = {};
var INF = Number.POSITIVE_INFINITY;
function coinchange(S, coins) {
    var T = [];
    var F = []; //from
    var res = [];
    T[0] = 0;
    F[0] = -1;
    for (var i = 1; i <= S; i++) {
        T[i] = INF;
        F[i] = -1;
    }
    for (var j = 0; j < coins.length; j++) {
        var c = coins[j];
        for (var i = 0; i < T.length; i++) {
            if (i >= coins[j]) {
                var tmp = T[i] - (1 + T[i - coins[j]]);
                if (tmp > 0) {
                    T[i] = 1 + T[i - coins[j]];
                    F[i] = j;
                }
            }
        }
    }

    //溯源
    var len=T.length;
    var fin = T[len - 1];
    var takecoin = coins[F[len - 1]];
    res.unshift(takecoin);
    var remain = S - takecoin;
    while (remain > 0) {
        var t = coins[F[remain]];
        res.unshift(t);
        remain -= t;
    }

    console.log(T);
    console.log(F);
    console.log(res);
}


coinchange(13, [7, 2, 3, 6]);
coinchange(6, [1, 3, 4]);
