const cityField = 'city'
const job = 'Frontend'
const person = {
    age: 26,
    name: 'Irina',
    job,
    [cityField+ Date.now()]: 'Saint-Peterburg',
    'country-live': 'Russia',
    print: ()=>'Person',
    toString: function (){
        return Object.keys(this)
            .filter(key => key !== 'toString')
            .map(key=>this[key])
            .join(' ')
    }
}
// console.log(person.toString())
// console.log(person.print())
// console.log(person)

/*METHODS*/
const first = { a: 1}
const second = {b : 2}

// console.log(Object.is(10, 10))
// console.log(Object.assign({}, first, second, {c:2, d:3}))
// console.log(first)
const obj = Object.assign({}, first, second, {c:2, d:3})
// console.log(obj)
// console.log(Object.entries(obj))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))