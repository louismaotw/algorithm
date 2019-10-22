/*disjoint sets: 沒有連接的集合。在最後的findSet可得到這個node所在的集合(由某一個node為代表，representative), 
    若所有的node都屬於同一個集合，就是沒有分散。
    在unionSet的findSet执行過程中，若兩個node都屬於同一個parent, 那就是有一個circle的存在。
*/
//var Set = require("./Set.js");
var Map = require("./Map.js");
var map=new Map();
var _=require("lodash");

function makeSet(data){
    var node=new myNode(data);
    //node.parent=node;
    map.set(data, node);
}

function myNode(data){
    this.data=data;
    this.parent=this;
    this.rank=0;
}


function unionSet(data1,data2){
    var node1=map.get(data1);
    var node2=map.get(data2);
 

    var parent1=findSet(node1);
    var parent2=findSet(node2);

    if(parent1.data==parent2.data){
        console.log("circle found");
        return false; //they are part of the same set, do nothing.
    } 
    if(parent1.rank>=parent2.rank){
        parent1.rank=(parent1.rank==parent2.rank) ? parent1.rank+1 : parent1.rank;
        parent2.parent=parent1;
        parent2.rank=0; //這個步驟無所謂，因為只有最後一個parent的rank是需要考慮的。
    }
    else{
        parent1.parent=parent2;
        parent1.rank=0;
    }
    return true;
}

function findSet(node){ //尋找這個node最後面的parent是誰
    var parent=node.parent;
    if(chk_obj_same2(parent,node)){
        return parent;
    }
    //if(node.data==parent.data)
    //    return parent;

    node.parent=findSet(node.parent); //recursion & path compression (順便將路徑上的node都設為最後一個的parent物件)
    return node.parent;
}

function chk_obj_same(a,b){
    if(JSON.stringify(a)===JSON.stringify(b))
        return true;
    return false;
}

function chk_obj_same2(a,b){
    if(_.isEqual(a,b))
        return true;
    return false;
}

makeSet(1);
makeSet(2);
makeSet(3);
makeSet(4);
makeSet(5);
makeSet(6);
makeSet(7);

unionSet(1,2);
unionSet(2,3);
unionSet(4,5);
unionSet(6,7);
unionSet(5,6);
unionSet(3,7);
unionSet(2,5); //for circle test

console.log(findSet(map.get(1)));
console.log(findSet(map.get(2)));
console.log(findSet(map.get(3)));
console.log(findSet(map.get(4)));
console.log(findSet(map.get(5)));
console.log(findSet(map.get(6)));
console.log(findSet(map.get(7)));


