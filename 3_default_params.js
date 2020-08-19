const defaultB = 30;
const getDefault = c =>c*2
function compute(a = getDefault(10), b = defaultB) {
    return a + b;
}

console.log(compute( ))
console.log(compute(26 ))