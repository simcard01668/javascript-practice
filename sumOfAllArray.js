let arr = [2,7,4,67,4,3,6,85,3,42];

function sumOfAllArray(arr){
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        counter += arr[i]
    }
    return counter;

}

console.log(sumOfAllArray(arr))