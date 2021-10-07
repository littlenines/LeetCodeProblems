const prices = [7,1,5,3,6,4];
let profit=0;
    for(let i=0;i<prices.length-1;i++){
        let j=i+1;
        if(prices[j]>prices[i]){
            profit=profit+prices[j]-prices[i];
        }
    }
    console.log(profit);