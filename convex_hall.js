/*
Convex Hall, Jarvis March，quote from Jarvis March
we ar trying to draw a boundary around these points such that all the points are covered and the boundary is minimum.

LeeCode: Erect the Fence
*/

function convex(orig){
    var arr=orig.slice();
    var res=[];
    var collinear=[]; //lying on the same straight line.
    var smallest=Number.POSITIVE_INFINITY;

    var idx;//找出最左邊的point
    for(var i=0; i<arr.length; i++){
        var a=arr[i][0];
        if(a<smallest){        
            smallest=a;
            idx=i;
        }      
    }
    var tmp=arr[idx]; 
    res.push(arr[idx]);//放到結果陣列中

    
    arr.splice(idx, 1); //刪掉idx位置的元素，1代表1個元素
    arr.splice(0, 0, tmp);  //將找到的最左邊點放在第一個位置, 陣列索引位置為0
    var done=false;
    var first=true;
    rec(arr);
    console.log("***result");
    console.log(res);


    function rec(arr){ //arr為一個陣列
        if(done==true) //已連接到了第一個point
            return;
        var a=arr[0]; //對應於thumb rule中的a
        var b=arr[1]; //對應於thumb rule中的b
        if(arr.length==2){ //只剩兩個元素了
            res.push(b);
            return;
        }
        var idx=1;
        var i=2;
        do{
            let c=arr[i]; //對應於thumb rule中的c
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

        if(idx==1){ //已連接到了第一個point
            res.push(b);
            done=true;
            return;
        }
        arr.splice(idx,1); //刪掉idx位置的元素
        if(first==true){
            arr.splice(0,0,b); //將b加入第0個位置
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