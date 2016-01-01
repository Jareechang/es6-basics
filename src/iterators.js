


let addOne  = {
    [Symbol.iterator]() {
        let value=0; 
        return  {
            next() {
                value ++;
                return { done: false , value: value}
            }
        }
    }
}

for (var n of addOne) {
    if (n > 5)
        break;
    console.log(n);
}