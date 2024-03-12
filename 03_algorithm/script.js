function sumArr(arr){
    return arr.reduce((acc,num)=> acc + num,0)
}

console.log(sumArr([1, 5.2, 4, 0, -1]))
console.log(sumArr([]))
console.log(sumArr([-2.398]))