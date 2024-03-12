/* primera solucion */
/* function invert(arr){
    let newArr;
    newArr = arr.map((value)=>{
        return value * -1
    })
    return newArr
} */
/* segunda solucion */
function invert(arr){
    return arr.map((value)=>value * -1)
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))
