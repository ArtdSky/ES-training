class Person {
    type = 'Human'
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(this.name + ' saying hello!!')
    }
}
// const max = new Person('Max')
// console.log(max.type)
// max.greet()
// console.log(max.__proto__ === Person.prototype)

class Programmer extends Person{
    constructor(name, job) {
        super(name);
        this._job = job
    }
    get job(){
        return this._job.toUpperCase()
    }
    set job(job){
        if (job.length<2){
            throw new Error('Validation failed')
        }else{
            this._job = job
        }
    }
    greet() {
        super.greet();
        console.log('Rewritten!')
    }
}

const frontend = new Programmer('Max', 'frontend')
// console.log(frontend)
// frontend.greet()
// console.log(frontend.job)
// frontend.job = 'Backend'
// console.log(frontend.job)

/* STATIC */
class Util {
    static average(...args){
        return args.reduce((acc, i)=> acc+=i, 0)/ args.length
    }
}
// const util = new Util()
// console.log(util.average(1,1,2,3,5,8))
const res = Util.average(1,1,2,3,5,8)
console.log(res)