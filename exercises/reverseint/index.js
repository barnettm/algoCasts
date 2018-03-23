// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let newArray = n.toString().split('').reverse()
//     if(newArray[newArray.length -1] === '-') {
//         let lastElement = newArray.pop()
//         newArray.unshift(lastElement)
//     }
//     newArray = newArray.join('')
//     newArray = parseFloat(newArray)
//     return newArray
// }

function reverseInt(n) {
    const reverse = n.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(n)
}




// console.log(reverseInt(-15))

module.exports = reverseInt;
