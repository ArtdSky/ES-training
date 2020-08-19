// REST
// function average_old(){
//
//     return Array.from(arguments).reduce((acc, i )=> acc+=i, 0)/ arguments.length
// }
// console.log(average_old(10,20,30,40))
//
// const average = (a,b,...args)=> args.reduce((acc, i)=> acc+i,0)/args.length
// console.log(average(10,20,30,40,50))

/* SPREAD*/
// const array = [1, 2, 3,5 ,8]
// console.log(Math.max.apply(null, array))
// console.log(...array)
// console.log(Math.max(...array))
//
// const fib = [1, ...array]
// console.log(fib)

/* DESTRUCTURING */

const array = [ 1, undefined ,3 ,5 ,8 ,13 ,21]
// const a = array[0]
//
// const [b, c = 42, ...d] = array
// console.log(a, b ,c, d)
//
// const [a, ,,,c] = array
// console.log(a,c)

//Object
const adress={
    country : 'Russia',
    city : 'Moskow',
    street: 'Lenina',
    concat: function (){
        return `${this.country} ${this.city} ${this.street}`
    }
}
// console.log(adress.concat())
// const {city, country, street = 'Tverskaya', concat: adressConcat} = adress
// console.log(city, country, street)
// console.log(adressConcat.call(adress))
// console.log(street)
const {city, ...rest} = adress
console.log(city)
console.log(rest)

const newAdress = {...adress, street: 'Tverskaya', code : 123}
console.log(newAdress)