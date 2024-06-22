let arr = [2,65,3,56,23,67,43,3,5,46,3,43,2,4]

const averageNum = arr.reduce(Sum)/arr.length

function Sum(accumulator, nextElement){
    return accumulator + nextElement
}

console.log(averageNum)
