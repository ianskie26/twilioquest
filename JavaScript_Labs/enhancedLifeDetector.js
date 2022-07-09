const argumentValue = process.argv[2];
const x = parseInt(argumentValue);

if(x === 0) {
    console.log("alive")
} else if(x === 1) {
    console.log("flowering")
} else if(x === 2) {
    console.log("shedding")
} else
console.log("other")