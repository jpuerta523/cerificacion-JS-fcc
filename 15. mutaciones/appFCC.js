/* version para FCC con entrada con unico arreglo de 2 palabras */

function makeArr(str){
    let  arr = str.trim().toLowerCase().split("")
    return [...new Set(arr)]
}

/* version para FCC con entrada con unico arreglo de 2 palabras */
function mutation(arr) {
    let arr1 = makeArr(arr[0])
    let arr2 = makeArr(arr[1])
    let arrAns =[]
    for (let e=0; e <= arr2.length-1; e++ ){
        arrAns.push(arr1.includes(arr2[e]))
    }
    let ans = arrAns.indexOf(false ===-1)
   
    return ans === -1 ? true : false
}
