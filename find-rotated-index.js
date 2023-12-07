function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num > arr[0] && num < arr[pivot - 1]){
        return binarySearch(arr, num, 0, pivot - 1)
    }
    else { 
        return binarySearch(arr, num, pivot, arr.length - 1)
    }
}

function binarySearch(arr, num, start, end){
    if (arr.length === 0) return -1;
    if (arr[start] > num || arr[end] < num) return -1

    while (start <= end){
        let midIdx = start + Math.floor((end - start)/2);
        
        if (arr[midIdx] === num){
            return midIdx
        }
        else if (num < arr[midIdx]){
            end = midIdx - 1;
        }
        else { 
            start = midIdx + 1;
        }
    }
}


function findPivot(arr){
    if (arr.length === 1 || arr[0] < arr[arr.length-1]) return 0
    let start = 0;
    let end = arr.length -1;

    while (start <= end){
        let midIdx = start + Math.floor((end - start)/2);
        if (arr[midIdx] > arr[midIdx + 1]) return midIdx + 1;
        else if (arr[start] <= arr[midIdx]) {
            start = midIdx + 1
        }
        else {
            end = midIdx - 1
        }
    }
}

module.exports = findRotatedIndex