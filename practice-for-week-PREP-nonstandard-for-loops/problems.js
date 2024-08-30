function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
var arr2 = []
for(let i = 1; i < arr.length; i= i+2) {
arr2.push(arr[i])
}
return arr2
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    var arr2 = []
    for(let i = 1; i < arr.length; i= i+2) {
    arr2.unshift(arr[i])
    }
    return arr2
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    if(!arr) return
const arr2 = []
for(let i = 0; i< arr.length; i*=2) {
    if(i === 0) {arr2.push(arr[1])
    i=1
    }
    else arr2.push(arr[i])
}

return arr2
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here

    if(!arr) return
    const arr2 = []
    for(let i = 0; i< arr.length; i*=n) {
        if(i === 0) {arr2.push(arr[1])
        i=1
        }
        else arr2.push(arr[i])
    }

return arr2

}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here

const arr2 = []
if(!arr) return
for(let i = 0; i<Math.ceil(arr.length/2); i++) {
    arr2.push(arr[i])
}
    return arr2
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here

    const arr2 = []
    if(!arr) return

    for(let i = arr.length/2; i< arr.length; i++) {
if(arr.length%2 !== 0) {
    i= Math.ceil(arr.length%2)
     continue
    }
        arr2.push(arr[i])
    }
        return arr2


}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}