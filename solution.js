var summation = function (num) {
    let numArr = []
    let startingNum = 1
    let total = 0
    while (startingNum <= num) {
        numArr.push(startingNum)
        startingNum++
    }
    for (let i = 0; i < numArr.length; i++) {
        total = total + numArr[i]
    }
    return total
}

console.log(summation(8))