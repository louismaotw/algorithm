//SPOJ

/*
填表的方式，縱軸為a, 橫軸為b。
*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");


function edist(a,b) {
    var m = a.length;
    var n = b.length;
    var E = [];
    for (var i = 0; i <= m; i++) {
        E[i] = []; //Edit表
        for (var j = 0; j <= n; j++) {//從0開始，為了在最左、最右都增加一列、一行。
            if (i == 0) //最左一列皆填為0
                E[i][j] = j;//最上一列皆填為0
            else if (j == 0)
                E[i][j] = i;
            else if (a[i - 1] == b[j - 1])
                E[i][j] = E[i - 1][j - 1];
            else {
                E[i][j] = Math.min(E[i][j - 1],
                    Math.min(E[i - 1][j], E[i - 1][j - 1])
                    ) + 1;
            }
        }
    }
    console.log(E[m][n]);

    console.log(E);

    var a_arr = a.split("");
    var b_arr = b.split("");
    a_arr.unshift("");
    b_arr.unshift("");
    console.log(a_arr);
    console.log(b_arr);
 
    findValue2(a_arr,b_arr,a_arr.length,b_arr.length, E, []);

}



function findValue2(input1, input2, i_p, j_p, Tlcs, Resu) { //i position, j position, result array
    //若傳入findValue2的i_p為9，代表有9個元素，但只計算1~8(i=i_p-1)，因位置0為硬填進去的0。
    var i = i_p-1,
        j = j_p-1;
    var result = Resu;

    while (i > 0 && j > 0) {
        if (input1[i] == input2[j]) {
            result.unshift("keep: " + input1[i]); //
            i--;
            j--;
        }

        else {
            if (Tlcs[i][j] == Tlcs[i - 1][j] + 1) {
                result.unshift("del: " + input1[i]);
                i--;
            }
            else if (Tlcs[i][j] == Tlcs[i][j - 1] + 1) {
                result.unshift("add: " + input2[j]);
                j--;
            }
            else {
                result.unshift("replace: " + input1[i] + " with " + input2[j]);
                i--;
                j--;
            }
        }
    }
    console.log(result);
    
}

function value_invoke(res) {
    var tmp = [];
    for (var i = 0; i < res.length; i++) {
        tmp.push(res[i]);
    }
    return tmp;
}

//var a = "Cloud Kaksha";
//var b = "Code Kaksha";
var a = "abcdef";
var b = "azced";
edist(a,b);
