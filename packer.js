//背包問題
function BestCoinChange(coins, needs) { //coins代表可拿的寶物，needs代表寶物的體積。
    var coins = coins;
    var needs = needs;
    var cache = {};
    this.makePacker = function (amount) {//寶物總體積必須<=amount。
        var me = this;
        if (!amount) {
            return [];
        }
        //if (amount<=0) {
        //    return [];
        //}


        if (cache[amount]) {
            return cache[amount];
        }

        var best = [], //最佳的結果陣列
            newBest, //暫時的最佳結果陣列
            newAmount, //差值
            value_max=0;
            

        for (var i = 0; i < needs.length; i++) {
            var coin = coins[i];
            var need = needs[i];
            var new_value_sum=0;
            newAmount = amount - need //newAmount:背包所剩體積
            if (newAmount >= 0) {
                newBest = me.makePacker(newAmount);
                new_value_sum = fun_value_sum(newBest); 
            }
            if (newAmount >= 0 &&
                (new_value_sum + coin > value_max || !best.length)  // && (newBest.length || !newAmount) 刪除此敘述
                ) {
                //有更好的value
                best = [coin].concat(newBest);
                value_max = new_value_sum + coin;
                var act_amount = fun_amount_sum(best);
                console.log('new Result: ' + best + ' amount: ' + amount + ' actual amount: ' + act_amount +' value: ' + value_max);
            }
        }
        //console.log(amount + " - " + best.toString());
        return (cache[amount] = best);
    };

    var fun_value_sum = function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i] ;
        }
        return sum;
    };

    var fun_amount_sum = function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            var ind = coins.indexOf(arr[i]);
            sum += needs[ind];
        }
        return sum;
    };
}

var bestCoinChange = new BestCoinChange([1, 4, 7], [2, 5, 8]);
console.log(bestCoinChange.makePacker(36)); //傳入之參數為背包的容量大小。