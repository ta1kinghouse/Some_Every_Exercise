

function hasOddNumber(arr) {
   return arr.some(function(num){
        return num % 2 !== 0;
    });
}

function hasAZero(num) {
    return num.toString().split('').some(function(value){
        return value === '0';
    });
}


function hasOnlyOddNumbers(arr) {
    return arr.every(function(num){
        return num % 2 !== 0;
    });
}


function hasNoDuplicates(arr) {
    return arr.every(function(num){
        return arr.indexOf(num) === arr.lastIndexOf(num);
    });
}


function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return key in val;
    });
}


function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return val[key] === searchValue;
    });
}
