/*SPOJ TRT, treats for the cows
�b�ӫ~�[�W��N�ӱƤ@�C���ӫ~�ݰ�A�ӫ~�u��q�̥��γ̥k���X�ӽ�A�ӫ~�U�[����U�Q(���s�@��)�A
����n�p��w�ƾP�ⶶ�Ǥ~����o�̤j�Q��C
<�K����Michal Danilak>
The correctly written backtrack function should always represent an answer to a well-stated question. 
In our case profit function represents an answer to a question: 
"What is the best profit we can get from selling the wines with prices stored in the array p, 
when the current year is year and the interval of unsold wines spans through [be, en], inclusive?"
�@�ӥ��T���^�����(backtrack function)���n��@�ө��T�����D���@�ө��T���ѵ�(��^��)�C
*/

function trt(arr) {
    var cache = [];
    var pos = [];
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        cache[i] = [];
        pos[i] = [];
    }
    function profit(be, en) { //����ƶǦ^�bbe�Men���϶��A�P�⪺�̤j�Q��C
        if (be > en) //�פ����
            return 0;
        if (cache[be][en] != null)
            return cache[be][en];
        var year = arr.length - (en - be + 1) + 1;
        var cal = Math.max(profit(be + 1, en) + year * arr[be], profit(be, en - 1) + year * arr[en]);
        if (profit(be + 1, en) + year * arr[be] >= profit(be, en - 1) + year * arr[en])
            pos[be][en]='L';
        else
            pos[be][en]='R';
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
var test=[2,3,5,1,4]
console.log(trt(test));
