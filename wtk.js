/*
SPOJ WTK, why this kolaveri di?
����Josephus algorithm���ܧΡA����X�۹ꪺ�k�ġAĴ�p��5�Ӥk�ġA���Ʀ��@��A
�q�Ĥ@�Ӷ}�l�A����1�����}(�]�N�O�s��1���k��)�C����q�s��2�k�Ķ}�l����1�B2�A��2�����}(�]�N�O�s��3���k��)�C
�������1�B2 �B3�A��3 �����}(�]�N�O�s��2���k��)�A�H�U�����C�D�̫�ѤU���k�Ľs���C
�M�зǪ�Josephus algorithm���t���D�n�b����ƪ��ȷ|�@���W�[�C
*/

var CirList = require("./CircularLinkList.js");
var cirlist = new CirList();
var away_order = [];
var s = 1;
function wtk(n,k) { //������n�ӤH�A�@�}�l��STEP�A�b����1�C
    if (n == 1)
        return 0; //�U�Х�0�}�l��
    var tmp = (wtk(n - 1, k+1) + k) % n;
    
    return tmp;
}

function wtk2(n) { //������n�ӤH�A�@�}�l��STEP�A�b����1�C
    if (n == 1)
        return 0; //�U�Х�0�}�l��
    var offset = s;
    s++;
    var tmp = (wtk2(n - 1) + offset) % n;
    
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


console.log(wtk(10, 1));
console.log(wtk2(10));
//console.log(away_order);
//joseph2(41);
