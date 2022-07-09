// Your function must return a number. 
// The number should be the result of transforming and combining the input array as described in the objective.

function calculatePower(arr) {
    const transformedArr = arr.map(item => item * 2)
    const result = transformedArr.reduce((sum, item) => sum += item, 0)
    return result
}