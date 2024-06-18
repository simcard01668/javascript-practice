let num = 5;

function factorial(num){
    let setNum = num;
    for(let i = num-1; i > 0; i--){
        setNum = i*setNum
    }
    return setNum;
}

console.log(factorial(num))