function* fib(){
        let [val1, val2] = [0, 1];
        while(true){
            yield val1;
            [val1, val2] = [val2, val1+val2];
        }
}

lst = fib()
const helper = (x, f) => f(x);

function* fibs (){
    while(true){
        let even_num = lst.next().value;
        if (helper(even_num, x => (x%2)===0)){
            yield even_num
        }
    }
}

let result = fibs();
const print = count => {
    while (count --> 0) {
        console.log(result.next().value)
    }
};
print(5);