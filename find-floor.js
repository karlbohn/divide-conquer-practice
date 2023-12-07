function findFloor(arr, num, start = 0, end = arr.length-1) {
    if (start > end) return -1;
    if (num >= arr[end]) return arr[end];

    let midIdx = start + Math.floor((end - start)/2);
    
    if (num === arr[midIdx]) return arr[midIdx];
    
    if (midIdx > 0 && num < arr[midIdx] && num <= [midIdx - 1]){
        return arr[midIdx - 1]
    }

    if (num < arr[midIdx]){
        return findFloor(arr, num, start, midIdx - 1)
    }

    return findFloor(arr, num, midIdx + 1, end)
}


module.exports = findFloor