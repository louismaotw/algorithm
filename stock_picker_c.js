//Stock Picker

//���
function StockPicker(arr) {
    var buy_point,
        sell_point,
        profit;
    buy_point = arr[0];
    profit = -1;
    for (var i = 1; i < arr.length; i++) {
        sell_point = arr[i];
        if (sell_point < buy_point) {
            buy_point = sell_point;
        }
        else {
            var tmp_profit = sell_point - buy_point;
            if (tmp_profit > profit) {
                profit = tmp_profit;
                console.log("buy: " + buy_point + " sell: " + sell_point + " tmp_profit: " + profit)
            }
        }
    }
    return profit;
}

function lcs(arr) { //��C�@�Ӧ�m�Ө��A�ѥ��ܥk�A�i��o���̰��ɾ��l���ơCAlso see cloud kaksha�����C
    var len = arr.length;
    var lis = [];
    for (var i = 0; i < len; i++) { //��l��
        lis[i] = 0;
    }
    console.log("sssssssssssssssssss");
    for (var i = 1; i < len; i++) {
        for (var j = 0; j < i; j++) {
            var dist = arr[i] - arr[j];
            if (arr[i] > arr[j]) {
                lis[i] = lis[j]+dist;
            }
        }
    }
    return lis;
}

console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 8, 15]));
//console.log(StockPicker([44, 130, 24, 32, 35, 30, 40, 38, 15]));
console.log("----------");
 
console.log(lcs([44, 130, 24, 32, 35, 30, 40, 38, 15]));
console.log(lcs([44, 30, 24, 32, 35, 30, 40, 38, 15]));