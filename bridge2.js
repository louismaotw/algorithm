//LCS : Longest Common Sequence
//{3,4,6,7,8}, {3,5,7,7,8}, 

//填表
var Stack = require("./Stack.js");
var stack = new Stack();


function lcs(arr) { //對每一個位置而言，由左至右，可獲得的最高升冪子集數。
    var len = arr.length;
    var lis = [];
    for (var i = 0; i < len; i++) { //初始化
        lis[i] = 1;
    }
    for (var i = 1; i < len; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i]<=lis[j]) {
                lis[i] = lis[j] + 1;
            }
        }
    }
    return lis;
}
lcs([1, 3, 2, 7, 4, 6]);

function longestSeq(input1, input2, n1, n2) {
    var Tlcs = []; //table LCS
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
            else if (Tlcs[i - 1][j] > Tlcs[i][j - 1]) {
                i--;
            }
            else {
                if (Tlcs[i - 1][j - 1] != Tlcs[i][j]) {
                    var jx = j - 1;
                    var result_x = value_invoke(result);
                    var arr = [input1, input2, i + 1, jx + 1, Tlcs, result_x];
                    stack.push(arr);                   
                }
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

var input1 = [2,5,8,10],
   input2 = [6, 4, 1, 2];

//var input1 = [1,2,3,4,5,6],
//   input2 = [3, 4, 5, 6, 1, 2];
console.log(input1);
console.log(input2);

//本作法input1必須是升冪排序，在input2上將相對應的數字填上。
var maxnum = input1[0];
for (var i = 1; i < input1.length; i++) { //計算在陣列input1中的數值最大元素
    if (input1[i] > maxnum)
        maxnum = input1[i];
}

var tmp_arr = [];
for (var i = 0; i < maxnum; i++) { //都填入0
    tmp_arr[i] = 0;
}
for (var i = 0; i < input1.length; i++) { //若input1為[2,5,8,10]，則產生[0,2,0,0,5,0,0,8,0,10]
    var v = input1[i];
    tmp_arr[v - 1] = v;
}
var input1a = tmp_arr.slice();

tmp_arr = [];
for (var i = 0; i < maxnum; i++) {
    tmp_arr[i] = 0;
}
for (var i = 0; i < input2.length; i++) {//若input2為[6,4,1,2]，則產生[8,10,0,5,0,2,0,0,0,0]
    var v = input2[i];
    var orig = input1[i];
    tmp_arr[v - 1] = orig;
}
var input2a = tmp_arr.slice();

for (var i = 0; i < input1a.length; ) {//將input1陣列中0的元素去掉
    if (input1a[i] == 0)
        input1a.splice(i, 1);
    else
        i++;

}
for (var i = 0; i < input2a.length;) {//將input2陣列中0的元素去掉
    if (input2a[i] == 0)
        input2a.splice(i, 1);
    else
        i++;
}

	
input1a.unshift("");
input2a.unshift("");

console.log(input1a);
console.log(input2a);

n1 = input1a.length,
n2 = input2a.length;
console.log(longestSeq(input1a, input2a, n1, n2));
input2a.shift();
console.log(lcs(input2a));
console.log(lcs([3, 4, 5, 6, 1, 2]));
