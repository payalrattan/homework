const boughtCandyPrices = [];
function addCandy(candyType,weight)
{
    let pricePergram;
    let totalSpent = 0;
    switch(candyType)
    {
        case "sweet":pricePergram=0.5; break;
        case "chocolate": pricePergram = 0.7; break;
        case "toffee": pricePergram = 1.1; break;
        case "chewing-gum": pricePergram = 0.03; break;
        default:
            console.log("Type of candy not found");
            return;
    }
    const toatlprice = pricePergram*weight;
    boughtCandyPrices.push(toatlprice);
    console.log(boughtCandyPrices);
}
addCandy("sweet",6);
addCandy("sweet",5);
addCandy("sweet",8);
addCandy("sweet",10);
const amountToSpend=(Math.random())*100;
let  totalSpent = 0;
function canBuyMoreCandy()
{
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalSpent += boughtCandyPrices[i];
    }
    console.log("Total spent:" +totalSpent);
    console.log("Amount to spend:"+ amountToSpend);
    const amountLeft = amountToSpend-totalSpent;
    console.log("Remaining balance is "+amountLeft);
     return totalSpent<amountToSpend;
}


console.log(canBuyMoreCandy() ? "You can buy more, so please do!" : "Enough candy for you!");