module.exports = arrayListx;

function arrayListx() {
    //this.a1 = tmp;
    //console.log(this.a1); //�X�{undefined
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
    ���this.a1=array,  �ѩ�array=arr.slice()���ԭz�A�i��O��array���s�w�q���@�ӷs��array, �ñNarr�ƻs�i�ӡA
    �ҥH�y��this.a1���|�Marray���s�ʡA��s���ͳ̷s�ȡC
    ���this.a1=tmp, a1�|�@���O���Mtmp�}�C���s�ʡC
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