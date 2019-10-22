//Coin changing Minimum Coins

/* 

*/
//���
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");



function kmp(text, pattern) {
    var chk = 0;
    var len_text = text.length;
    var len_pattern = pattern.length;
    console.log(len_text + "<->" + len_pattern);
    var res = cal_res(pattern);
    console.log(res);

    for (var i = 0; i < len_text; i++) {
        console.log(i + " chk " + chk);
        if (text.charAt(i) == pattern.charAt(chk)) {
            if (chk==len_pattern-1) {
                return i;
            }
            chk++;
        }
        else {
            if (chk > 0) {
                chk = res[chk-1];
                i--;
            }
            else
                chk = 0;
        }
    }
    return("not found");


    function cal_res(pat) { //�ǤJpattern�r��A�p��Xres�}�C�A�N��C�@�Ӧ�m��"suffix==prefix"����m�C      
        var arr = pat.split('');
        var res = [];
        res[0] = 0;
        var j = 0;
        var pre = false;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] == arr[j]) {
                res[i] = j + 1;
                j++;
                pre = true;
            }
            else {//���r�����P�_�O���ŦX��
                if (pre == false) {//�e�@�Ӧr�����P�_�O���ŦX��
                    res[i] = j;
                    pre = false;
                }
                else {//�e�@�Ӧr�����P�_�O�ŦX��
                    //console.log(i + '***' + j);
                    j=mismatch(i,j);
                }
            }
        }

        function mismatch(i, j) {
            var tmp = res[j - 1];
            if (arr[tmp] == arr[i]) {
                res[i] = tmp + 1;
                pre = true;
                return tmp+1;
            }
            else {
                if (tmp == 0) {
                    res[i] = 0;
                    pre = false;
                    return 0; //�Ω�ק�j��
                }
                return mismatch(i, tmp);
            }
        }
        return res;
    }
}

var text =    "abcxabcdabxabcdabcdabcy";
var pattern = "abcdabcy";
//var pattern1 = "abcdabca";
//var pattern2="aabaabaaa"
//console.log(kmp(text, pattern1));
//console.log(kmp(text, pattern2));
console.log(kmp(text, pattern));


