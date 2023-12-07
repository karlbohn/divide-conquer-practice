function countZeroes(arr) {
    let firstZero = findZero(arr);
    if (firstZero === -1) return 0;

    return arr.length - firstZero;  
}

function findZero(arr, low=0, high=arr.length-1){
    if (high >= low){
        let middle = low + Math.floor((high - low)/2)
        if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0){
            return middle
        }
        else if (arr[middle] === 1){
            return findZero(arr, middle + 1, high)
        }
        return findZero(arr, low, middle -1)
    }
    return -1
}

// Check middle index. If 1, check middle index of higher half. If 0, check
// middle index of lower half. When 
module.exports = countZeroes    