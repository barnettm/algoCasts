// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let stringArray = str.split('')
    let returnString = ''
    for(let i = 0; i<str.length; i++){
        if(str[i-1] === ' ' || str[i-1] === undefined){
            let uppercase = str[i].toUpperCase()
            returnString += uppercase
        }else{
            returnString += str[i]
        }
    }
    return returnString
}

// console.log(capitalize('a short sentance'))

module.exports = capitalize;
