function findMinimum(arr = []){
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(result > arr[i]){
            result = arr[i];
        }
    }
    return result;
}

console.log(findMinimum([3321,5425423,5453,12321]))