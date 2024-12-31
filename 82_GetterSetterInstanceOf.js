class Animal {
    constructor(name) {
        this._name = name // using _name to avoid collision with getter name
    } 
    fly() {
        console.log("I am flying")
    }

    //getter
    get name() {
        return this._name
    }

    //setter
    set name(newName) {
        this._name = newName
    }
}

let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)


// instanceof Operator allows to check whether an object belongs to a certain class
// or any other class inheriting from it
console.log(a instanceof Animal)
let c = 10
console.log(c instanceof Animal)

class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating carrot")
    }
}

let b = new Rabbit("Rabbit")
console.log(b instanceof Animal)