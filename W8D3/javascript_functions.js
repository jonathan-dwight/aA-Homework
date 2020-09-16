// madLib
function madLib(verb, adj, noun) {    
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

madLib("make", "best", "guac")


// isSubstring

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

// fizzbuzz

function fizzBuzz(array) {
    const fizzBuzzArr = [];

    array.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzBuzzArr.push(el);
        }
    });

    return fizzBuzzArr;
}

// isPrime