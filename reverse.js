const reverse = function (arr) {
    let a = new Array;
    for(let i = arr.length-1; i >= 0; i--) {
        a.push(arr[i]);
    }
    return a;
}

const reversedArray = reverse([7,8,9]);
console.log(reversedArray);