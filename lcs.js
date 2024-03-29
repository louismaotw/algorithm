//LCS : Longest Common Sequence

//���
function longestSeq(input1, input2, n1, n2) {
    var Tlcs = []; //table LCS
    for (let i = 0; i < n1; i++) {
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
    findValue(input1, input2, n1, n2, Tlcs);
    return Tlcs;
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
            if (Tlcs[i - 1][j] > Tlcs[i][j - 1]) {
                i--;
            }
            else {
                j--;
            }
        }
    }
    console.log(result);
}
//var u = "";
//var v = "";
//console.log(u == v);

var input1 = ["x", "a", "c", "b", "a", "d"],
    input2 = ["x", "a", "b", "c", "a", "d", "f"],
	n1 = input1.length,
	n2 = input2.length;

console.log(longestSeq(input1, input2, n1, n2));
