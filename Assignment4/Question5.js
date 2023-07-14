function arrange_Coins(n) {
    let i = 1;
    while (n >= i) {
        n -= i;
        i++;
    }
    return i - 1;
}

let n = 5;
console.log(arrange_Coins(n)); 
