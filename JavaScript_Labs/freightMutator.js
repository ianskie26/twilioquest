// Your function must return an array of strings. 
// The array should contain all the items in the input array, except that they have all been converted to ALL CAPS.

function mutate(arr) {
    const mutatedCargo = arr.map(item => item.toUpperCase())
    return mutatedCargo
}