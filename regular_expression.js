//Coin changing Minimum Coins

/* quote from Tushar
T[i][j]=
(condition 1)
=T[i-1][j-1] if text[i]==pattern[j] || pattern[j]=='.'

if(pattern[j]=='*'
(condition 2)
=T[i][j-2] '*'zero occurence,�N��e�@�r���S���X�{�����p
=T[i-1][j] if text[i]==pattern[j-1] || pattern[j-1]=='.' text[i]�ŦX��e��pattern����q(�p...a*)�A�ҥHtext[i]�����ﵲ�G�S�v�T

*/
//���
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
            //�Ĥ@���a�C
            if (j == 0) {
                T[i][j] = false;
                continue;
            }
            //�b�Ĥ@�Ӿ��A���B�za*b*c*������
            if (i == 0) { 
                if (pattern.charAt(j - 1) == '*' && j > 1) {
                    T[i][j] = T[i][j - 2];
                }
                else
                    T[i][j] = false;
                continue;
            }
            //�b�ثe��(i,j)����m�Atext����pattern
            if (text.charAt(i - 1) == pattern.charAt(j - 1) || pattern.charAt(j - 1) == '.') {
                T[i][j] = T[i - 1][j - 1];

            }
            else if (pattern[j - 1] == '*') {
                if (T[i][j - 2] == true) //*�O�e�@�r��zero occurence�����p
                    T[i][j] = true;
                else if (text[i - 1] == pattern[j - 2] || pattern[j - 2] == '.')//*�O�e�@�r���X�{1�Φh�������p
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


