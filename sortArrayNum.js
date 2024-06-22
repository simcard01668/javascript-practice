let num = [2,5,2,53,54,2,45,24,24,656,57,35,123]

function sortNum(num){
    return num.sort((a,b)=>{a-b})
}

console.log(sortNum(num))