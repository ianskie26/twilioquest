// Your function must return an array of strings. 
// The array should contain all the items in the input array,  
// except for any occurrences of the string specified by the second argument to your function.


function scanAndFilter(arr, str) {
    let filteredArray = arr.filter(item => item !== str)
    return filteredArray
}