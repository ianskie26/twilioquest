function addFirstToLast(arr) {
    let firstandlast=''

    if(arr.length > 0) {
        let first = arr[0]
        let last = arr[arr.length-1]
        firstandlast = first + last
    }
    return firstandlast
}
