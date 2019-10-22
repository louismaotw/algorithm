/*SPOJ: GSS1, can you answer these queries I solution. �̤j�l�q�M
Problem: 

Algorithm:

*/
//���
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

//�ϥ�segment tree.
function gss1(arr, begin, end) { //begin: 1 based.
    var len = arr.length;
    var res = []; //result array
    var tree = [];
    function ele_cstr() {
        this.maxL = 0; //prefix
        this.maxR = 0; //suffix
        this.sum = 0;
        this.mx = 0;
    }

    /*
    �ϥ�build��ƫإߤ@�ʾ�Anode�N���O�@�ӽs���A�]�N�Okey�A�p1���U��O(2�B3)�A2���U��O(5�B6)�A5���U��(11�B12)�C
    �إߤ@��tree�}�C�A�t�X�}�C���Ǹ��A�Ǹ�������node���X�C
    */
    var build = function (node, start, end) { 
        if (start == end) {
            var ele = new ele_cstr(); //element constructor
            ele.maxL = arr[start];
            ele.maxR = arr[start];
            ele.sum = arr[start];
            ele.mx = arr[start];
            tree[node] = ele;
        }
        else {
            var mid = Math.floor((start + end) / 2);
            build(2 * node + 1, start, mid);
            build(2 * node + 2, mid + 1, end);
            var ele = new ele_cstr();
            var a = tree[2 * node + 1];
            var b = tree[2 * node + 2];
            ele.maxL = Math.max(a.maxL, a.sum + b.maxL);
            ele.maxR = Math.max(b.maxR, b.sum + a.maxR);
            ele.sum = a.sum + b.sum;
            ele.mx = Math.max(a.mx, b.mx, a.maxR+b.maxL );
            tree[node] =ele; //�Q��tree�}�C�O��node�o�ӽs������(�b�����@�Ӫ���)�C
        }
    };

    var query=function(node, start, end, l, r){
        if (start > r || end < l || l > r) { //���start~end�c�����϶��A�����bl~r�c�����϶����~�C
            //var ele = new ele_cstr();
            //ele.maxL = 0;
            //ele.maxR = 0;
            //ele.sum = 0;
            //ele.mx = 0;
            //return ele;
            return null;
        }
        if(l<=start && r>=end) //Completely inside. ��ܬY��node�A��start~end�c�����϶��A�����bl~r�c�����϶������C
            return tree[node];
        var mid=Math.floor((start+end)/2);
        var a=  query(2 * node + 1, start, mid, l, r); //��^�Ȭ�tree[]�����@�Ӥ���
        var b = query(2 * node + 2, mid + 1, end, l, r);

        var ele = new ele_cstr();
        if (a == null || b == null) {
            var t;
            if (a == null)
                t = b;
            if (b == null)
                t = a;
            return t;
        }
        else {
            ele.maxL = Math.max(a.maxL, a.sum + b.maxL);
            ele.maxR = Math.max(b.maxR, b.sum + a.maxR);
            ele.sum = a.sum + b.sum;
            ele.mx = Math.max(a.mx, b.mx, a.maxR + b.maxL);
            return ele;
        }      
    }

    build(0, 0, len - 1);
    console.log('tree:');
    console.log(tree);
    console.log(query(0, 0, len - 1, begin - 1, end - 1).mx);
}



var test = [4,-10,3,100,-20,1];
//var test = [-1,2,3];
//var test = [9, -1, 8, -2, 7, 3, 6, -40, 5, -15, 17];
//var test = [-1,-2,3,4,-5];
console.log(test);
gss1(test,1,6);
