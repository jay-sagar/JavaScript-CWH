class RailwayForm {
    submit() {
        console.log(this.name + "form is submitted for train no : " + this.trainNo)
    }
    cancel() {
        console.log(this.name + "form is cancelled" + this.trainNo)
        this.trainNo = 0
    }
    preview() {
        console.log(this.name + ": Your form is for train number: " + this.trainNo + " and your address is " + this.address)
    }

    constructor(givenName, trainNo, address) {
        console.log("Constructor Called...")
        this.name = givenName
        this.trainNo = trainNo
        this.address = address
    }
}

let harry = new RailwayForm("harry", 3173, "240, pacific ocean, bihar - 23123")
harry.preview();
harry.submit()
harry.cancel()
harry.preview()
