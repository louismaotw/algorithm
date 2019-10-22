//LCS : Longest Common Sequence
//{3,4,6,7,8}, {3,5,7,7,8}, 
/*
要進入某格有兩個途徑(此兩途徑的LCS，我們是已知的)。
一：若進入後發現兩字串的最後一個字元相同，則此格的值為左上角格值加1。
注意，不可由左側或上方的值取最大值加1，會造成重覆值的錯誤。
二：若不同，則取兩途徑值的最大值。
*/

//填表
var Stack = require("./Stack.js");
var stack = new Stack();
function longestSeq(input1, input2, n1, n2) {
    var Tlcs = []; //table LCS
    //下面的兩個for for迴圈會將TLCS表從左上開始一列一列的開始填表
    for (let i = 0; i < n1; i++) { //對input1, input2已經在陣列最前面加入一個空字串
        Tlcs[i] = [];
        for (let j = 0; j < n2; j++) {
            if (j == 0 || i == 0) {
                Tlcs[i][j] = 0;
                continue;
            }
            if (input1[i] == input2[j]) {
                Tlcs[i][j] = Tlcs[i-1][j-1] + 1;
            }
            else {
                Tlcs[i][j] = Math.max(Tlcs[i-1][j], Tlcs[i][j-1]);
            }
        }
    }
    findValue2(input1, input2, n1, n2, Tlcs, []);
    return Tlcs;
}

function findValue2(input1, input2, i_p, j_p, Tlcs, Resu) { //i position, j position, result array
    //若傳入findValue2的i_p為9，代表有9個元素，但只計算1~8(i=i_p-1)，因位置0為硬填進去的0。
    var i = i_p - 1,
        j = j_p - 1;
    var result = Resu;

    while (i > 0 && j > 0) {
        if (input1[i] == input2[j]) {
            result.unshift(input1[i]);
            i--;
            j--;
        }

        else {
            if (Tlcs[i - 1][j] < Tlcs[i][j - 1]) {
                j--;
            }
            else if (Tlcs[i - 1][j] > Tlcs[i][j - 1]){
                i--;
            }
            else {
                var jx = j - 1;
                var result_x = value_invoke(result); //複制一個result的分身
                var arr = [input1, input2, i + 1, jx + 1, Tlcs, result_x];
                //在此需寫i+1, jx+1, 因稍後在帶入findValue2時會再減去1。
                //在往左和往上的數值相等時，會先往上回溯。往左的回溯會等while()完成後再執行。
                stack.push(arr);
                i--;
            }
        }
    }
    console.log(result);
    if (!stack.isEmpty()) {
        var tmp = stack.pop();
        findValue2(tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5]);
    }
}

function value_invoke(res) {
    var tmp=[];
    for (var i = 0; i < res.length; i++) {
        tmp.push(res[i]);
    }
    return tmp;
}

function findValue(input1, input2, n1, n2, Tlcs) {
    var i = n1 - 1,
        j = n2 - 1;
    var result = [];
    //console.log(i);
    //console.log(j);
    while (i > 0 && j > 0) {
        if (input1[i] == input2[j]) {
            result.unshift(input1[i]);
            i--;
            j--;
        }
   
        else {
                if (Tlcs[i - 1][j] < Tlcs[i][j - 1]) {
                j--;
                }
                else {
                    i--;
                }
        }

    }
    console.log(result);
}
//var u = "";
//var v = "";
//console.log(u == v);

var input1 = [1,3,4,5,6,7,7,8],
    input2 = [3,5,7,4,8,6,7,8,2];
	
input1.unshift("");
input2.unshift("");

n1 = input1.length,
n2 = input2.length;
console.log(longestSeq(input1, input2, n1, n2));
