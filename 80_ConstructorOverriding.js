class Employee {
    constructor(name) {
        console.log(`${name} - Employee's constructor is here`)
        this.name = name
    }

    login() {
        console.log(`Employee has logged in`)
    }
    logout() {
        console.log(`Employee has logged out`)
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto Aprroved`)
    }
}

class  Programmer extends Employee {
    // the reason why Employee constructor is calling because
    // constructor(...args) {
    //     super(...args) // this is how default constructor works if you don't declare it
    // }

    constructor(name) {
        // constructor in inheritance classes must call super(..) and do it before using "this"
        // use super.method() in a child method to call parent method
        super(name)
        this.name = name;
        console.log(`This is newly written constructor - ${name}`)
    }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)
        // console.log(`Employee has requested ${leaves + 1} leaves`)
        console.log("One extra is granted")
    }
}

let e = new Programmer("Jay");
e.login()
e.requestLeaves(3)

