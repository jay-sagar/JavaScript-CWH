class Animal {

    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk() {
        console.log(`Animal ${this.name} is walking`)
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let j = new Animal("jack")
j.walk()

let i = new Animal(Animal.capitalize("bob")) // can use like this
i.walk()

console.log(Animal.capitalize("sagar"))