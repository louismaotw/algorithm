//Stock Picker

//¶ñªí
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

//console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]));
console.log(StockPicker([44, 130, 24, 32, 35, 30, 40, 38, 15]));