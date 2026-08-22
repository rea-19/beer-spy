// this is to find the cheapest price, im assuming you can call it from an outside file.
// assumes the prices are sorted by like an array with locations being somhow linked to the prices, 
// like a dict or somthing in python idk how to describe it.
// hopfuly this gets used

function cheapest_item(prices){
    
let cheapest = prices[0]

for (let i = 1; i < prices.length; i++){
    if (prices[i] < cheapest){
        cheapest = prices[i];
    }
}

return cheapest;
}


