//aibohp:Aibohobia 

//LCS : Longest Common Sequence
//{3,4,6,7,8}, {3,5,7,7,8}

/* quote from CloudKAKSHA (Spoj AIBOHP solution).
First input the string S, take its reverse ‘Sr’ and find the length of the longest palindromic subsequence.
Find the difference, S.length() – LCS(S , Sr)
The value obtained above is the answer.
Only those characters that are not included in the Longest Palindromic Subsequence, need their counterparts to be inserted. thus, our final answer is correct. (keep in mind that we can only insert and not delete any character).
*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var str_length;

function aibohp(str) {
    var arr1 = str.split("");
    var arr2=[];
    for (var i = arr1.length-1; i>=0; i--) {
        arr2.push(arr1[i]);
    }
    arr1.unshift("");
    arr2.unshift("");
    console.log(arr1);
    console.log(arr2);
    str_length = str.length;
    var Tlcs = longestSeq(arr1, arr2, arr1.length, arr2.length);

    console.log("Tlcs: ");
    console.log(Tlcs);
  
}

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
                Tlcs[i][j] = Tlcs[i - 1][j - 1] + 1;
            }
            else {
                Tlcs[i][j] = Math.max(Tlcs[i - 1][j], Tlcs[i][j - 1]);
            }
        }
    }
    findValue2(input1, input2, n1, n2, Tlcs, [], [], []);
    return Tlcs;
}

function findValue2(input1, input2, i_p, j_p, Tlcs, Resu, po1, po2) { //i position, j position, result array
    var i = i_p - 1,
        j = j_p - 1;
    var result = Resu;
    var pos1 = po1;
    var pos2 = po2;

    while (i > 0 && j > 0) {
        if (input1[i] == input2[j]) {
            result.unshift(input1[i]);
            pos1.unshift(i);
            pos2.unshift(j);
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
                var jx = j - 1;
                var result_x = value_invoke(result);
                var arr = [input1, input2, i + 1, jx + 1, Tlcs, result_x];
                stack.push(arr);
                i--;
            }
        }
    }
    console.log("LCS: ");
    console.log(result);
    console.log("position:");
    console.log(pos1);
    console.log(pos2);
    console.log("number of chars need to add: ");
    console.log(str_length - result.length); //aibohp的答案。若要成為迴文，需要增加的字元數。

    if (!stack.isEmpty()) {
        var tmp = stack.pop();
        findValue2(tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5]);
    }

    create_final_string(input1, input2, pos1, pos2);
}

function create_final_string(str1, str2, po1, po2) {
    var final = [];
    var cur1s=1, cur1e, cur2s=1, cur2e; //cur1s:current 1 start, curle:current 1 end.
    for (var i = 0; i < po1.length; i++) { 
        cur1e = po1[i];
        cur2e = po2[i];
        var queue = new Queue();
        /*Only those characters that are not included in the Longest Palindromic Subsequence, 
        need their counterparts to be inserted. thus, our final answer is correct. 
        將這些需INSERT的字元先暫時存在queue中。
        */
        for (var j = cur1s; j < cur1e; j++) { //j=0是空字元，不考慮。
            queue.enqueue(str1[j]);
        }
        cur1s = cur1e + 1;

        for (var k = cur2s; k < cur2e; k++) {
            final.push(str2[k]);
        }
        cur2s = cur2e + 1;

        while (!queue.isEmpty()) {
            var item = queue.dequeue();
            final.push(item);
        }
        final.push(str2[cur2e]);
    }

    for (var i = cur2s; i < str2.length; i++) { //將str1後面的字元加入。
        final.push(str2[i]);
    }

    for (var i = cur1s; i < str1.length; i++) { //將str2後面的字元加入。
        final.push(str1[i]);
    }

    console.log(final);
}

function value_invoke(res) {
    var tmp = [];
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

//aibohp("AGBDBAH");
aibohp("fft");
