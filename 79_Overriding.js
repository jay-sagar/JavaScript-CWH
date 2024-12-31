class Employee {
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
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)
        // console.log(`Employee has requested ${leaves + 1} leaves`)
        console.log("One extra is granted")
    }
}

let e = new Programmer();
e.login()
e.requestLeaves(3)

