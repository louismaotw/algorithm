/*
quote form Tushar Roy.
to pick 1 subset at a time and then go through every vertex in the graph except the start vertex and the vertex in the subset. 
Try to find what is the min cost to reach that vertex from start vertex and going through all the vertices in the subset. 
���G

*/

var Stack = require("./stack.js");
var stack = new Stack();

function travelling_salesman(arr){
    var len = arr.length;
    var org = [];//origin
    var sub = [];//subset
    var res = [];//result
    var org_max;
    //sub.push([]);
    for (var i = 0; i < len; i++) {
        //var s = [i];
        org.push(i);
    }
    org_max=len-1;

    for (var i = 0; i < org.length; i++) {
        if (sub.indexOf(org[i]) == -1) {
            var t = [];
            t.push(org[i]);
            sub.push(t);
        }       
    }

    res=res.concat(sub);

    recur(sub);

    remove_0(res);

    var cal_reco = []; //calculate record

    function reco(x, y) {
        this.to = x; //�ؼ�vertex
        this.via = y; //�g�ѭ��@��subset
        this.dist = Infinity;
        this.from = null; //�ؼ�vertex���e�@��vertex
    }

    function createRoute() { //�ϦV���ɥX������|
        var res_arr = [0];
        
        var len = cal_reco.length;
        var i = len-1;
        var a = cal_reco[i];
        res_arr.unshift(a.from);
        var prev=a.from;
        var subset = a.via.slice(); //�ƻs�@��"a.via"�}�C
        var idx = subset.indexOf(prev);
        subset.splice(idx, 1);
        i--;
        while (a.from != 0) {
            a = cal_reco[i];
            if(prev==a.to && chk_same_arr(a.via, subset)){
                res_arr.unshift(a.from);
                prev = a.from;
                subset = a.via.slice(); //�ƻs�@��"a.via"�}�C
                idx = subset.indexOf(prev);
                subset.splice(idx, 1);
            }
            i--;          
        }
        res_arr.unshift(0);
        console.log(res_arr);
    }

    function calculate() {
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < org.length; j++) {              
                if( (res[i].length < org.length-1 && org[j] != 0 && res[i].indexOf(org[j]) == -1) ||
                   (res[i].length == org.length-1  && org[j] == 0 && res[i].indexOf(org[j]) == -1))
                //if(true)
                {
                    if (res[i].length == 0) {
                        var t = new reco(j, []);
                        t.dist = arr[0][org[j]];
                        t.from = 0;
                        cal_reco.push(t);
                    }
                    else {
                        var minDist = Infinity;
                        var minReco = new reco();
                        for (var k = 0; k < res[i].length; k++) { //��@��subset,�p[1,2]�A�����C�@�Ӥ����i��ާ@
                            var x = res[i].slice();
                            var a = x[k];
                            x.splice(k, 1); //�bx�}�C��k��m�����@�Ӥ����Cthis method changes the original array and returns a new Array, containing the removed items (if any)
                            var b = x;
                            var dist = chk_cal_reco(org[j], a, b); //�ǻ����ѼƦp�A(3,1,[2])�A���I1>���I3���Z�����d��A���I"0"�g��subset[2]�쳻�I1���Z���h�Ѧ�cal_reco�}�C�C
                            //console.log(dist + " !! " + minDist);
                            if (dist < minDist) {
                                minDist = dist;
                                minReco.to = org[j];
                                minReco.via = res[i];
                                minReco.dist = dist;
                                minReco.from = a;
                            }                            
                        }
                        cal_reco.push(minReco);
                    }
                }               
            }
        }

        //�p��ܳ��I"a"�A�q���I0�A�g��subset b�A���Z��
        function chk_cal_reco(t, a, b) {//target vertex, from vertex, via vertex array)
            var dist=arr[a][t]; //�����d��
            for (var i = 0; i < cal_reco.length; i++) {//�ˬd"cal_reco"�}�C���M���d�ߨC�@�Ӫ��󤸯�
                var r = (cal_reco[i]);
                if(r.to==a && chk_same_arr(r.via, b)){
                    dist += r.dist;
                    return dist;
                }
            }

            
        }

    }

    //�ˬdx,y�o��Ӱ}�C�O�_�ۦP
    function chk_same_arr(x, y) {
        if (x.length != y.length)
            return false;
        for (var i = 0; i < x.length; i++) {
            if (y.indexOf(x[i]) == -1)
                return false;
        }
        return true;
    }

    function remove_0(res) {
        var i = 0;
        while (res[i] != undefined) {
            if (res[i].indexOf(0) != -1) {
                res.splice(i, 1);
            }
            else
                i += 1;
        }
        res.unshift([]);//�b�}�C���̥����J�@�ӪŰ}�C
    }


    function recur(arr) { //�ǤJ��arr���O[[0,1],[0,2]...[0,4]]
        var len2 = arr[0].length; //arr�C�Ӱ}�C����������
        if (len2 == len)
            return;
        var new_sub = [];
        for (var i = 0; i < arr.length; i++) {         
            var chk = arr[i][len2 - 1];//arr����i�Ӱ}�C�������̫�@�ӭ�
            var n = chk + 1;          
            while (n <= org_max) {
                var new_item = arr[i].concat([n]);
                new_sub.push(new_item);
                n += 1;
            }
        }
        res = res.concat(new_sub);
        recur(new_sub);

    }

    


    console.log(org);
    //console.log(sub);
    console.log(res);
    calculate();
    console.log(cal_reco);
    createRoute();
}

var test=[
    [0,1,15,6],
    [2,0,7,3],
    [9,6,0,12],
    [10,4,8,0]
];

//var test2 = [0,1, 2, 3, 4];

travelling_salesman(test);



