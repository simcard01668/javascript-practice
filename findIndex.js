arr = [5,46,643,75472,3452,343,'Ho','yes']

function findIndex(arr,element){
    if( arr.indexOf(element)){
        return arr.indexOf(element)
    } else {
        return -1
    }
}

console.log(findIndex(arr,33))