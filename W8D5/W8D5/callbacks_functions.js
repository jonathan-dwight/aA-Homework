
let alert = function() {
    console.log('HAMMERTIME');
};

window.setTimeout(alert, 5000);

// ALTERNATE
// function alert() {
//     // remind in one min
//     window.setTimeout(function () {
//         console.log('HAMMERTIME');
//     }, 5000);

// };

alert();

function hammerTime(time) {
    window.setTimeout(function () {
        console.log(`${time} is hammertime!`)
    }, time);
};

hammerTime("5000");

// //


const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function teaAndBiscuits() {
    let answer1, answer2;

    reader.question("Do you want tea?", (res) => {
        answer1 = res;
        console.log(`You replied ${res}`)
    });
        
    reader.question("Do you want biscuits?", (res) => {
        answer2 = res;
        console.log(`You replied ${res}.`)
    });

    const firstRes = (answer1 === 'yes') ? 'do' : 'don\'t';
    const secondRes = (answer2 === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();
}





// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);

//   // Close the reader, which will allow the program to end because it
//   // is no longer waiting for any events.
//   reader.close();
// });

// console.log("Last program line");
// Timeout Plus Closure
// Next, we are going to write a function hammerTime that takes in one argument - time.
// When the function is run, it should set a timeout on the window.
// Pass a callback to the timeout that creates an alert ${ time } is hammertime!.

// Notice that the callback function closed over the time variable in the outer scope of hammerTime.








