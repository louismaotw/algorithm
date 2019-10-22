//�I�]���D
function BestCoinChange(coins, needs) { //coins�N��i�����_���Aneeds�N���_������n�C
    var coins = coins;
    var needs = needs;
    var cache = {};
    this.makePacker = function (amount) {//�_���`��n����<=amount�C
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

        var best = [], //�̨Ϊ����G�}�C
            newBest, //�Ȯɪ��̨ε��G�}�C
            newAmount, //�t��
            value_max=0;
            

        for (var i = 0; i < needs.length; i++) {
            var coin = coins[i];
            var need = needs[i];
            var new_value_sum=0;
            newAmount = amount - need //newAmount:�I�]�ҳ���n
            if (newAmount >= 0) {
                newBest = me.makePacker(newAmount);
                new_value_sum = fun_value_sum(newBest); 
            }
            if (newAmount >= 0 &&
                (new_value_sum + coin > value_max || !best.length)  // && (newBest.length || !newAmount) �R�����ԭz
                ) {
                //����n��value
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
console.log(bestCoinChange.makePacker(36)); //�ǤJ���ѼƬ��I�]���e�q�j�p�C