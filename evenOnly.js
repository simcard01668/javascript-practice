arr = [1,6,8,9,10,12,52,63,76,34,14,68];

// function evenOnly(arr){

//     const evenArray = [];
//     for (let i=0; i < arr.length; i++){
//         if(arr[i]%2 == 0){
//             evenArray.push(arr[i])
//         }
//     }
//     return evenArray
// }

// console.log(evenOnly(arr))

function evenOnly(arr){
    return arr.filter((num)=> num%2 ===0)
}

console.log(evenOnly(arr))