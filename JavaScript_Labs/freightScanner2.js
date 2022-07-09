// Your function must return an array of numbers. 
// The array must contain the indexes of all occurrences of the string contraband in the input array.

function scan(arr) {
    let newArr = []

    arr.forEach(function(val, i){
        if(val === 'contraband') {
            newArr.push(i)
        }
    })

    return newArr
}