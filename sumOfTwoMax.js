let arr = [2,7,1,646,23,5,14,75,34]

function sumOfTwoMax(arr){
    const Max = Math.max(...arr)
    const MaxIndex = arr.indexOf(Max);
    arr.splice(MaxIndex,1)
    const Max2 = Math.max(...arr)
    return Max - Max2
    
}

console.log(sumOfTwoMax(arr))
