/*Josephus algorithm, in how many ways can you tile a 3xn rectangle with 2*1 dominoes?
41個人排成圓圈，由第1個人 開始報數，每報數到3的人就必須自殺，然後由下一個重新報數，直到所有人都自殺身亡為止。
約瑟夫與不想自殺的那個人分別排在第16個與第31個位置，於是逃過了這場死亡遊戲。 

*/

var CirList = require("./CircularLinkList.js");
var cirlist = new CirList();
var away_order = [];
function joseph(n, k) { //全部有n個人，下標由0開始算
    var away=0;
    if (n == 1)
        return 0;
    var tmp = (joseph(n - 1, k) + k) % n;
    away = k;
    away_order.push(tmp);
    return tmp;
}

function joseph2(n) { //採用環狀鏈結串列的方式
    for (var i = 0; i < n; i++) {
        cirlist.append(i);    
    }
    console.log(cirlist.toString());

    var cnt = 1;
    while (true) {
        if (cnt == 3) {
            var deleted = cirlist.delete_work(); //採用delete_work方法後，head和tail都會亂掉，不可再引用(toString等)
            console.log(cirlist.size() + "/" + deleted.element);
            cnt = 1;
            if (cirlist.size() == 1) {
                console.log("Result:");
                console.log(cirlist.work().element);
                break;
            }
        }
        cirlist.advance();
        cnt++;
    }
}


console.log(joseph(41, 3));
//console.log(away_order);
joseph2(41);
