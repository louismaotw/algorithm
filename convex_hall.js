/*
Convex Hall, Jarvis March�Aquote from Jarvis March
we ar trying to draw a boundary around these points such that all the points are covered and the boundary is minimum.

LeeCode: Erect the Fence
*/

function convex(orig){
    var arr=orig.slice();
    var res=[];
    var collinear=[]; //lying on the same straight line.
    var smallest=Number.POSITIVE_INFINITY;

    var idx;//��X�̥��䪺point
    for(var i=0; i<arr.length; i++){
        var a=arr[i][0];
        if(a<smallest){        
            smallest=a;
            idx=i;
        }      
    }
    var tmp=arr[idx]; 
    res.push(arr[idx]);//��쵲�G�}�C��

    
    arr.splice(idx, 1); //�R��idx��m�������A1�N��1�Ӥ���
    arr.splice(0, 0, tmp);  //�N��쪺�̥����I��b�Ĥ@�Ӧ�m, �}�C���ަ�m��0
    var done=false;
    var first=true;
    rec(arr);
    console.log("***result");
    console.log(res);


    function rec(arr){ //arr���@�Ӱ}�C
        if(done==true) //�w�s����F�Ĥ@��point
            return;
        var a=arr[0]; //������thumb rule����a
        var b=arr[1]; //������thumb rule����b
        if(arr.length==2){ //�u�Ѩ�Ӥ����F
            res.push(b);
            return;
        }
        var idx=1;
        var i=2;
        do{
            let c=arr[i]; //������thumb rule����c
            let v=crossProduct(a,b,c);
            if(v>0){
                b=c;
                idx=i;
                collinear=[];
            }
            else if(v==0){ //special handling for collinear points
                collinear.push(b);
                b=c;
                idx=i;           
            }
            i=i+1;
        }
        while(i<arr.length);

        while(collinear.length>0){
            let t=collinear.pop();
            res.push(t);
        }

        if(idx==1){ //�w�s����F�Ĥ@��point
            res.push(b);
            done=true;
            return;
        }
        arr.splice(idx,1); //�R��idx��m������
        if(first==true){
            arr.splice(0,0,b); //�Nb�[�J��0�Ӧ�m
            first=false;
        }
        else{
            arr[0]=b;
        }
        
        res.push(b);
        console.log(arr);
        rec(arr);
    }
}

function crossProduct(a,b,c){
    var y1=a[1]-b[1];
    var y2=a[1]-c[1];
    var x1=a[0]-b[0];
    var x2=a[0]-c[0];
    return y2*x1-y1*x2;
}

var test=[[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]; //ANS: [[1,1],[2,0],[4,2],[3,3],[2,4]]
//var test=[[-2,1],[1,1],[4,2],[2,2],[4,4],[2,-1],[4,-3],[-1,-3]];
convex(test);