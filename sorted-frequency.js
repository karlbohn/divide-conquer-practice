function sortedFrequency(arr, num) {
    first = findFirst(arr, num);
    last = findLast(arr, num);

    if (first === -1) return 0
    return last - first + 1

}

function findFirst(arr, num, low = 0, high = arr.length-1){
    if (high>=low){
        let midIdx = low + Math.floor((high - low)/2);
        if ((midIdx === 0 || num > arr[midIdx - 1]) && arr[midIdx] === num){
            return midIdx
        }

         else if (arr[midIdx] < num){
            return findFirst(arr, num, midIdx+1, high)
        }

        else if(arr[midIdx] > num){
          return findFirst(arr, num, low, midIdx-1)
        }
    }
    return -1
}

function findLast(arr, num, low = 0, high = arr.length-1){
    if (high>=low){
        let midIdx = low + Math.floor((high - low)/2);
        if ((midIdx === 0 || num < arr[midIdx + 1]) && arr[midIdx] === num){
            return midIdx
        }

         else if (arr[midIdx] < num){
            return findFirst(arr, num, midIdx+1, high)
        }

        else if(arr[midIdx] > num){
          return findFirst(arr, num, low, midIdx-1)
        }
    }
    return -1
}

module.exports = sortedFrequency