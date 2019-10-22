//LCS : Longest Common Sequence
//{3,4,6,7,8}, {3,5,7,7,8}, 

//���
var Stack = require("./Stack.js");
var stack = new Stack();


function lcs(arr) { //��C�@�Ӧ�m�Ө��A�ѥ��ܥk�A�i��o���̰��ɾ��l���ơC
    var len = arr.length;
    var lis = [];
    for (var i = 0; i < len; i++) { //��l��
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
    for (let i = 0; i < n1; i++) { //��input1, input2�w�g�b�}�C�̫e���[�J�@�ӪŦr��
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

//���@�kinput1�����O�ɾ��ƧǡA�binput2�W�N�۹������Ʀr��W�C
var maxnum = input1[0];
for (var i = 1; i < input1.length; i++) { //�p��b�}�Cinput1�����ƭȳ̤j����
    if (input1[i] > maxnum)
        maxnum = input1[i];
}

var tmp_arr = [];
for (var i = 0; i < maxnum; i++) { //����J0
    tmp_arr[i] = 0;
}
for (var i = 0; i < input1.length; i++) { //�Yinput1��[2,5,8,10]�A�h����[0,2,0,0,5,0,0,8,0,10]
    var v = input1[i];
    tmp_arr[v - 1] = v;
}
var input1a = tmp_arr.slice();

tmp_arr = [];
for (var i = 0; i < maxnum; i++) {
    tmp_arr[i] = 0;
}
for (var i = 0; i < input2.length; i++) {//�Yinput2��[6,4,1,2]�A�h����[8,10,0,5,0,2,0,0,0,0]
    var v = input2[i];
    var orig = input1[i];
    tmp_arr[v - 1] = orig;
}
var input2a = tmp_arr.slice();

for (var i = 0; i < input1a.length; ) {//�Ninput1�}�C��0�������h��
    if (input1a[i] == 0)
        input1a.splice(i, 1);
    else
        i++;

}
for (var i = 0; i < input2a.length;) {//�Ninput2�}�C��0�������h��
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
