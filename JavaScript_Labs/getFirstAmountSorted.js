function getFirstAmountSorted(arr, num) {

    let sorted = arr.sort()
    let newArr = sorted.slice(0,num)
    return newArr
}