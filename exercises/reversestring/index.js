// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// take string and turn into an array. 
// loop array in reverse and add to new array
// turn new array into one string
// return new string


// function reverse(str) {
//      return str.split('').reverse().join('')
// }

function reverse(str) {
    let reverse = '';
    for(let character of str) {
        reverse = character + reverse
    }
    return reverse;
}


// const reverse = (str) => str.split('').reverse().join('')


// console.log(reverse('apple'))



module.exports = reverse;
