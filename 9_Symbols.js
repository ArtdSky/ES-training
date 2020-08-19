const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)
// console.log( symbol == other )

const obj = {
    name : 'Test',
    demo: 'DEMO',
    [symbol]:'meta'
}
// console.log(obj[symbol])
for (const key in obj) {
    console.log(key)
}