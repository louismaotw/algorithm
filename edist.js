//SPOJ

/*
����覡�A�a�b��a, ��b��b�C
*/
//���
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");


function edist(a,b) {
    var m = a.length;
    var n = b.length;
    var E = [];
    for (var i = 0; i <= m; i++) {
        E[i] = []; //Edit��
        for (var j = 0; j <= n; j++) {//�q0�}�l�A���F�b�̥��B�̥k���W�[�@�C�B�@��C
            if (i == 0) //�̥��@�C�Ҷ�0
                E[i][j] = j;//�̤W�@�C�Ҷ�0
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
    //�Y�ǤJfindValue2��i_p��9�A�N��9�Ӥ����A���u�p��1~8(i=i_p-1)�A�]��m0���w��i�h��0�C
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
