//SPOJ

/*
Given a bag which can only take certain weight W. Given list of items with their weights and price. 
How do you fill this bag to maximize value of items in the bag.�C��item���u����@���C

*/
//���
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");

function knapsack(S, arr) {
    var src = arr.slice();
    var len = src.length;
   
    console.log(src);

    //��gT�}�C�Ci���a�C�Aj����C�Ci��src�}�C����index�Cj���q0~S(�I�]���i�ήe�q)
    var T = [];
    for (var i = 0; i < len; i++) {
        T[i] = [];
        for (var j = 0; j <= S; j++) {
            if (i == 0) {//���Ĥ@�C�n�S�O���w
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

    //����
    var m = src.length-1;//�a�C
    var n = S;//��C
    var res = [];
    while (m >= 0 && n > 0) {
        if (m == 0) {//���F�Ĥ@�C�ɭn���S�O���P�_
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

//�̷�cloudkaksha�W����k��@
function knapsack2(S,arr) {
    var src = arr.slice();
    var len = src.length;

    console.log(src);

    //��gT�}�C�Ci���a�C�Aj����C�Ci��src�}�C����index�Cj���q0~S(�I�]���i�ήe�q)
    var T = [];
    for (var i = 0; i <= len; i++) {
        T[i] = [];
        for (var j = 0; j <= S; j++) {
            if (i == 0 || j == 0) {//���Ĥ@�C�n�S�O���w                    
                T[i][j] = 0;     
           }
            else if (j < src[i-1][0]) {
                T[i][j] = T[i - 1][j];
            }
            else
                T[i][j] = Math.max(src[i-1][1] + T[i - 1][j - src[i-1][0]], T[i - 1][j]);
        }
    }
    console.log(T);
}

//var test = [[1, 8], [2, 4], [3, 0], [2, 5], [2, 3]]; //size, value of the item
//var S = 4; //bag capacity
var test = [[5, 7], [4, 5], [3, 4], [1, 1]]; //size, value of the item
var S = 7;
knapsack(S, test);
knapsack2(S, test);