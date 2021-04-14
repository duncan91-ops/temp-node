// Event loop first example
// readFile() is Asynchronous
const { readFile } = require('fs');

console.log('started a first task');
// CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed the first task');
})
console.log("starting the next task");