// Challenge: Your function must return a number, 
// the total number of times the string contraband appeared in the input array.

function scan(arr) {
    let contraband = 0

    arr.forEach(function(val){
        if(val === 'contraband') {
            contraband++
        }
    })

    return contraband   
}


