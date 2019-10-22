/*Josephus algorithm, in how many ways can you tile a 3xn rectangle with 2*1 dominoes?
41�ӤH�Ʀ����A�Ѳ�1�ӤH �}�l���ơA�C���ƨ�3���H�N�����۱��A�M��ѤU�@�ӭ��s���ơA����Ҧ��H���۱����`����C
����һP���Q�۱������ӤH���O�Ʀb��16�ӻP��31�Ӧ�m�A��O�k�L�F�o�����`�C���C 

*/

var CirList = require("./CircularLinkList.js");
var cirlist = new CirList();
var away_order = [];
function joseph(n, k) { //������n�ӤH�A�U�Х�0�}�l��
    var away=0;
    if (n == 1)
        return 0;
    var tmp = (joseph(n - 1, k) + k) % n;
    away = k;
    away_order.push(tmp);
    return tmp;
}

function joseph2(n) { //�ĥ������쵲��C���覡
    for (var i = 0; i < n; i++) {
        cirlist.append(i);    
    }
    console.log(cirlist.toString());

    var cnt = 1;
    while (true) {
        if (cnt == 3) {
            var deleted = cirlist.delete_work(); //�ĥ�delete_work��k��Ahead�Mtail���|�ñ��A���i�A�ޥ�(toString��)
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
