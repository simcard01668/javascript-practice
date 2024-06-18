let phrase = 'loo';

// function isPalindrome(phrase){
//     const splitPhase = phrase.split('')
//     const phaseNum = splitPhase.length
//     const reversePhase = [];
//     for (i= phaseNum-1; i >= 0; i--){
//         reversePhase.push(splitPhase[i])
//     }
//     let reverseText = reversePhase.join('')
//     return reverseText === phrase
// }

// console.log(isPalindrome(phrase))

function isPalindrome(phrase){
    const reversePhase = phrase.split('').reverse().join('')
    return reversePhase === phrase
}

console.log(isPalindrome(phrase))