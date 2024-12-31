class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }

    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(newReal) {
        this._real = newReal
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
}

let a= new Complex(2, 4)
let b = new Complex(4, 3)
console.log(a.real, a.imaginary)
a.real = 10
a.imaginary = 10
a.add(b)
console.log(`${a.real} + ${a.imaginary}i`)

class Human {
    constructor(name, food) {
        this.name = name
        this.food = food
    }
    walk() {
        console.log(`${this.name} + Human is walking`)
    }
}

class Student extends Human {
    walk() {
        console.log(`${this.name} + Student is walking`)
    }
}

let stu = new Student("jay", "chicken");
stu.walk()

console.log(stu instanceof Human)