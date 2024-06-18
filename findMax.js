arr = [2,10,7,7,8,12,8,19,20,16,80,46,24,73,463]

function findMax (arr){
    let arrLength = arr.length;
    let maxNum = arr[0];
    for (let i = 1; i < arrLength; i++ ){
        
        if(arr[i] > maxNum){
            maxNum = arr[i]
        } 
    }
    console.log(arrLength)
    console.log(maxNum)
}

// function findMax(arr){
//     const maxNum = Math.max(...arr)
//     console.log(maxNum)
// }

// findMax(arr)