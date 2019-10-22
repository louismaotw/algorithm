/*SPOJ: GSS1, can you answer these queries I solution. 最大子段和
Problem: 

Algorithm:

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

//使用segment tree.
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
    使用build函數建立一棵樹，node代表的是一個編號，也就是key，如1的下方是(2、3)，2的下方是(5、6)，5的下方(11、12)。
    建立一個tree陣列，配合陣列的序號，序號對應於node號碼。
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
            tree[node] =ele; //利用tree陣列記住node這個編號的值(在此為一個物件)。
        }
    };

    var query=function(node, start, end, l, r){
        if (start > r || end < l || l > r) { //表示start~end構成的區間，完全在l~r構成的區間之外。
            //var ele = new ele_cstr();
            //ele.maxL = 0;
            //ele.maxR = 0;
            //ele.sum = 0;
            //ele.mx = 0;
            //return ele;
            return null;
        }
        if(l<=start && r>=end) //Completely inside. 表示某個node，其start~end構成的區間，完全在l~r構成的區間之內。
            return tree[node];
        var mid=Math.floor((start+end)/2);
        var a=  query(2 * node + 1, start, mid, l, r); //返回值為tree[]中的一個元素
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
