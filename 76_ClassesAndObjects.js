class RailwayForm {
    submit() {
        console.log(this.name + "form is submitted for train no : " + this.trainNo)
    }
    cancel() {
        console.log(this.name + "form is cancelled")
    }
    fill(name, trainNo) {
        this.name = name
        this.trainNo = trainNo
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.fill("harry", 3213)
rohan.fill("rohan", 4444)

harry.submit()
rohan.submit()
rohan.cancel()

// here all these values are stored in object not in primitive date types, so you don't need to mention the var let or const to store it
// {
//     "name": "harry",
//     "trainNo": 3173,
//     "address": "240, pacific ocean, bihar - 23123"
//   }
  