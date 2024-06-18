let string = 'Hello';

function reverseString(string){
    const reverseString = string.split('').reverse().join('')
    return reverseString
}

console.log(reverseString(string))