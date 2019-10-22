//SPOJ

/*
Given a bag which can only take certain weight W. Given list of items with their weights and price. 
How do you fill this bag to maximize value of items in the bag.每樣item都只能取一次。

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");

function knapsack(S, arr) {
    var src = arr.slice();
    var len = src.length;
    //對src的第一個元素做排序
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (src[j][0] > src[j + 1][0]) {
                var aux = src[j];
                src[j] = src[j + 1];
                src[j + 1] = aux;
            }
        }
    }
    console.log(src);

    //產生一個order陣列，儲存各元素中，相同的第一個元素的元素所在的區間。
    var order = [];
    for (var i = 0; i < len; ) {
        var ind = src[i][0];
        var flag = false;
        if (i == len - 1) {
            order.push([i, i]);
            break;
        }
        for (var j = i + 1; j < len; j++) {
            //console.log(i + "/" + j);
            if (ind != src[j][0] ) {
                order.push([i, j - 1]);
                i = j;
                break;
            }
            if (j == len - 1) {
                order.push([i, j]);
                flag = true;
            }
        }
        if (flag)
            break;
    }
    console.log(order);

    //將src的第二個元素，由大到小做排序。
    for (var i = 0; i < order.length; i++) {
        var begin = order[i][0];
        var end = order[i][1];
        if (begin != end) {
            for (var j = begin; j <= end; j++) {
                for (var k = begin; k < end - j; k++) {
                    if (src[k][1] < src[k + 1][1]) {
                        var aux = src[k];
                        src[k] = src[k + 1];
                        src[k + 1] = aux;
                    }
                }
            }
        }
    }
    console.log(src);

    //填寫T陣列。i為縱列，j為橫列。i為src陣列中的index。j為從0~S(背包的可用容量)
    var T = [];
    for (var i = 0; i < len; i++) {
        T[i] = [];
        for (var j = 0; j <= S; j++) {
            if (i == 0) {//對於第一列要特別指定
                if (j < src[i][0]) {
                    T[i][j] = 0;
                }
                else
                    T[i][j] = src[i][1];
            }
            else if (j < src[i][0]) {
                T[i][j] = T[i - 1][j];
            }
            else
                T[i][j] = Math.max(src[i][1] + T[i - 1][j - src[i][0]], T[i - 1][j]);
        }
    }
    console.log(T);
    console.log(T[len - 1][S]);

    //溯源
    var m = src.length-1;//縱列
    var n = S;//橫列
    var res = [];
    while (m >= 0 && n > 0) {
        if (m == 0) {//當到達第一列時要做特別的判斷
            if(T[m][n]>0)
                res.unshift(src[m][0] + "(" + src[m][1] + ")");
            break;
        }
        else if (T[m][n] == T[m - 1][n]) {
            m--;
        }
        else {
            res.unshift(src[m][0] + "(" + src[m][1] + ")");
            n = n - src[m][0];
            m = m - 1;

        }
    }
    console.log(res);
}

//var test = [[1, 8], [2, 4], [3, 0], [2, 5], [2, 3]]; //size, value of the item
//var S = 4; //bag capacity
var test = [[5, 7], [4, 5], [3, 4], [1,1]]; //size, value of the item
var S = 7;
knapsack(S, test);
