/*
SPOJ WTK, why this kolaveri di?
此為Josephus algorithm的變形，為找出誠實的女孩，譬如有5個女孩，先排成一圈，
從第一個開始，報數1的離開(也就是編號1的女孩)。之後從編號2女孩開始報數1、2，喊2的離開(也就是編號3的女孩)。
之後報數1、2 、3，喊3 的離開(也就是編號2的女孩)，以下類推。求最後剩下的女孩編號。
和標準的Josephus algorithm的差異主要在於報數的值會一直增加。
*/

var CirList = require("./CircularLinkList.js");
var cirlist = new CirList();
var away_order = [];
var s = 1;
function wtk(n,k) { //全部有n個人，一開始的STEP，在此為1。
    if (n == 1)
        return 0; //下標由0開始算
    var tmp = (wtk(n - 1, k+1) + k) % n;
    
    return tmp;
}

function wtk2(n) { //全部有n個人，一開始的STEP，在此為1。
    if (n == 1)
        return 0; //下標由0開始算
    var offset = s;
    s++;
    var tmp = (wtk2(n - 1) + offset) % n;
    
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


console.log(wtk(10, 1));
console.log(wtk2(10));
//console.log(away_order);
//joseph2(41);
