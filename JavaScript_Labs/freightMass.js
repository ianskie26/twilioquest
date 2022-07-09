// Your function must return a number - the result of finding the length of all strings in the input array, 
// and adding those numbers together.

function calculateMass(arr) {
    const mass = arr.reduce((sum, item) => sum += item.length, 0)
    return mass
}