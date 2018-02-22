// PLEASE DON'T change function name
var ParCoin={"H":50,"Q":25,"D":10,"N":5,"P":1};
module.exports = function makeExchange(currency) {
    let Coins=currency;
    let Result={},current;
if(Coins<=0)
{
    return Result;
}
 if(Coins>10000)
{
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
}

for (let key in ParCoin){
    if(Coins==0){
        return Result;
    }

current=ParCoin[key];
let curCoins=Math.floor(Coins/current);
if(curCoins==0){
    continue;
}
Result[key]=curCoins;
Coins=Coins%current;
}
return Result;
}


