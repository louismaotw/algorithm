/*
quote form Tushar Roy.
假設有兩個陣列，將元素少的設為序列1。
(1)we are interested in finding the median of the combined sorted arrays so we want to partition these arrays into two halves
such that the number of elements on each is exactly the same, 
and every element on the left half is less than or equal to every element in the right half.
(2)we want to partition X and partition Y such that the number of elements on the left half of this partitions 
is equal to the total number of elements in the array divided by 2, 也就是"(x+y+1_/2)". 
there is adding plus 1 bcoz it plays well with both odd and even number of elements in the combined array divided by 2. 
*/
function medium(tmp1, tmp2) {
    var arr1, arr2;
    if (tmp1.length <= tmp2.length){
        arr1 = tmp1;
        arr2 = tmp2;
    }        
    else
    {
        arr1 = tmp2;
        arr2 = tmp1;
    }
    
    var half_len = Math.floor((arr1.length + arr2.length + 1) / 2);
    var even = (arr1.length + arr2.length) % 2==0 ? true: false;
    var parti_x = Math.floor(arr1.length / 2);
    var parti_y = half_len - parti_x;
    while (true) {
        var maxLeftX;
        var maxLeftY;
        if (parti_x == 0)
            maxLeftX = -Infinity;
        else
            maxLeftX = arr1[parti_x - 1];
        var maxLeftY = arr2[parti_y - 1];
        if (parti_x == arr1.length)
            minRightX = Infinity;
        else
            minRightX = arr1[parti_x];
        var minRightY = arr2[parti_y];
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if (even) {
                return ave(Math.max(maxLeftX, maxLeftY), Math.min(minRightX, minRightY));
            }
            else
                return Math.max(maxLeftX, maxLeftY);
        }
        else if (maxLeftX > minRightY) {
            parti_x -= 1;
            parti_y = half_len - parti_x;
        }
        else {
            parti_x += 1;
            parti_y = half_len - parti_x;
        }
    }

    function ave(x, y) {
        return (x + y) / 2;
    }
}

//var test1 = [1,3,8,9,15];
//var test2 = [7, 11, 18, 19, 21, 25];
var test1 = [23,26,31,35];
var test2 = [3,5,7,9,11,16];

console.log(medium(test1,test2));



