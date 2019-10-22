/*SPOJ TWENDS, two ends
�b�ӫ~�[�W��N�ӱƤ@�C���ӫ~�ݰ�A�ӫ~�u��q�̥��γ̥k���X�ӽ�A�ӫ~�U�[����U�Q(���s�@��)�A
����n�p��w�ƾP�ⶶ�Ǥ~����o�̤j�Q��C
<�K����Michal Danilak>
The correctly written backtrack function should always represent an answer to a well-stated question. 
In our case profit function represents an answer to a question: 
"What is the best profit we can get from selling the wines with prices stored in the array p, 
when the current year is year and the interval of unsold wines spans through [be, en], inclusive?"
�@�ӥ��T���^�����(backtrack function)���n��@�ө��T�����D���@�ө��T���ѵ��A
*/

function twends(arr) {
    var cache = [];
    var pos = [];
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        cache[i] = [];
        pos[i] = [];
    }

    function profit(be, en) { //����ƶǦ^�bbe�Men���϶��A1st player�M2nd player���̤j�t�ȡC
        if (be > en) //�פ����
            return 0;
        if (cache[be][en] != null)
            return cache[be][en];
        //var year = arr.length - (en - be + 1) + 1;
        var cal = Math.max(oppo(be + 1, en)+arr[be], oppo(be, en - 1) + arr[en]);
        if (oppo(be + 1, en) + arr[be] >= oppo(be, en - 1) + arr[en])
            pos[be][en]='L';
        else
            pos[be][en]='R';
        cache[be][en] = cal;
        return cal;   
    }

    function oppo(be, en) { //opponent
        if (be > en) //�פ����
            return 0;
        if (cache[be][en] != null)
            return cache[be][en];
        var cal;
        if (arr[be] >= arr[en]) 
            cal = profit(be + 1, en) - arr[be];
        else
            cal = profit(be, en - 1) - arr[en];

        if (arr[be] >= arr[en])
            pos[be][en] = 'L';
        else
            pos[be][en] = 'R';
        cache[be][en] = cal;
        return cal;
    }



    function check_pos(s, e) {
        if (s == e) {
            res.push(arr[s]);
            return
        }
        if (pos[s][e] == 'L') {
            res.push(arr[s]);
            check_pos(s + 1, e);
        }
        else {
            res.push(arr[e]);
            check_pos(s, e - 1);
        }
    }
    var len = arr.length;
    var profit_res = profit(0, len-1);
    check_pos(0, len-1);
    
    console.log(res);
    return profit_res;
}


//var test = [1, 3, 1, 5, 2];
//var test = [1, 2, 3, 4, 5, 6, 7, 8];
//var test = [3, 2, 10, 4];
var test = [2, 2, 1, 5, 3, 8, 7, 3];
console.log(twends(test));
