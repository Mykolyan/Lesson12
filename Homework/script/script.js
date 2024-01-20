// -----1----
// Використовуючи setInterval.
// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function () {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }

// printNumbers(4, 8);

// Використовуючи setTimeout

// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function run() {
//         alert(current);
//         if (current < to) {
//             setTimeout(run, 1000);
//         }
//         current++;
//     }, 1000);
// }

// printNumbers(5, 10);

// -----2----
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('виконалось через 3 секунди'));
