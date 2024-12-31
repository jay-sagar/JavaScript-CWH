// Finally runs in all cases
// If there is a return in try, finally is executed just before the control returns to the outer code


const f = () => {
  try {
    let a = 0;
    console.log(program);
    return
  } catch (err) {
    console.log("This is error");
    console.log(p);
  } finally {
    console.log("This will execute irrespective of anything ");
    // use this to final clean up
    // Close the file
    // Exit the loop
    // Write to the log file
  }
};
f();
console.log("Message")
