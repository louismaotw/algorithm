module.exports = arrayListx;

function arrayListx() {
    //this.a1 = tmp;
    //console.log(this.a1); //出現undefined
    var array;
    var pos;
    var tmp = [];
    //this.a1 = tmp;
    this.clonex = function (arr) { 
        array = arr.slice();
        console.log("clone: " + array);
        pos = array.slice();
        tmp.push(1);
    };
    /*
    對於this.a1=array,  由於array=arr.slice()的敘述，可能是對array重新定義為一個新的array, 並將arr複製進來，
    所以造成this.a1不會和array做連動，更新產生最新值。
    對於this.a1=tmp, a1會一直保持和tmp陣列做連動。
    */
    this.a1 = array; 
    //this.a1 = tmp;
    this.a = function () {
        return array;
    };
    this.pos = function () {
        return pos;
    }
}