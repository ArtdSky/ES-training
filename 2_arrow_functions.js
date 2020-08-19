// function sum_old(a,b) {
//     return a + b
// }
// function cube_old(a){
//     return a ** 3
// }
//
// const sum = (a,b)=> a+b;    //Λλ-functions
// console.log(sum(41,1))
//
// const cube = a => a**3;
// console.log(cube(2))
//
// setTimeout(function (){
//     console.log('after 1 second')
// }, 1000)
// setTimeout(()=> console.log('after 1 second'), 1000)

/*CONTEXT*/
// function log_old() {
//     console.log(this)
// }
//
// const log = () => console.log(this)
//
// const person = {
//     name: 'Test',
//     age: 20,
//     log: log_old,
//     arrowLog: log,
//     delayLog: function (){
//         const self = this;
//         global.setTimeout(function (){
//             console.log(self.name +' ' + self.age)
//         },500)
//     },
//     arrowDelayLog: function (){
//         global.setTimeout( ()=>{
//             console.log(this.name +' ' + this.age)
//         },500)
//     }
// }
// person.log()
// person.arrowLog()
// console.log(global)
// person.delayLog()
// person.arrowDelayLog()