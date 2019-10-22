//Coin changing Minimum Coins

/* quote from Tushar
T[i][j]=
(condition 1)
=T[i-1][j-1] if text[i]==pattern[j] || pattern[j]=='.'

if(pattern[j]=='*'
(condition 2)
=T[i][j-2] '*'zero occurence,代表前一字元沒有出現的情況
=T[i-1][j] if text[i]==pattern[j-1] || pattern[j-1]=='.' text[i]符合當前的pattern的後段(如...a*)，所以text[i]拿掉對結果沒影響

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");



function regular_exp(text, pattern) {
    var T = [];
    for (var i = 0; i <= text.length; i++) {
        T[i] = [];
        for (var j = 0; j <= pattern.length; j++) {
            if (i == 0 && j == 0) {
                T[i][j] = true;
                continue;
            }
            //第一個縱列
            if (j == 0) {
                T[i][j] = false;
                continue;
            }
            //在第一個橫行，須處理a*b*c*的情形
            if (i == 0) { 
                if (pattern.charAt(j - 1) == '*' && j > 1) {
                    T[i][j] = T[i][j - 2];
                }
                else
                    T[i][j] = false;
                continue;
            }
            //在目前格(i,j)的位置，text等於pattern
            if (text.charAt(i - 1) == pattern.charAt(j - 1) || pattern.charAt(j - 1) == '.') {
                T[i][j] = T[i - 1][j - 1];

            }
            else if (pattern[j - 1] == '*') {
                if (T[i][j - 2] == true) //*是前一字元zero occurence的情況
                    T[i][j] = true;
                else if (text[i - 1] == pattern[j - 2] || pattern[j - 2] == '.')//*是前一字元出現1或多次的情況
                    T[i][j] = T[i - 1][j];
                else
                    T[i][j] = false;
            }            
            else
                T[i][j] = false;
        }
    }
    console.log(T);
}

regular_exp("xaabyc", "xa*b.c");
regular_exp("", "a*b*");


