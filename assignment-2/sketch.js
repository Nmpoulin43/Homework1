function setup() {
//Assignment 2

alert("Hello, welcome!");


//simply asking for name
let name = prompt("What is your name?");
alert("Hi " + name + ", I can do quick math, let me show you!");


//year of birth calculator
let age = prompt("If you don't mind me asking, how old are you?");
let yb = (2025-age);
let yb1 = (2026-age)
alert("This would mean you were born around the year " + yb + ", or perhaps " + yb1 + "");

//second number prompt
let a = Number(prompt("Please enter an integer:"));
let b = Number(prompt("Enter another integer (greater than zero):"));

//basic calculation summaries
alert("A + B = " + (a + b));
alert("A - B = " + (a - b));
alert("A x B = " + (a * b));

if (b!== 0) {
  alert("A divided by B = " + (a / b));

} else {
  alert("Can't divide 0.");
}


alert("Think that was impressive? Check this out!");
let x = Number(prompt("Enter a decimal"));
alert("Rounded X = " + Math.round(x));


if (x >= 0) {
  alert("sqrt(X) = " + Math.sqrt(x));
} else {
  alert("sqrt(X) is not real for negative numbers.");
}

alert("Want to take a look into the future?");

let futureyear = Number(prompt("Choose a year in the future"));
let futureAge = futureyear - yb;

//math for the user's future age in that particular year
alert("In the year " + futureyear + ", you will be about " + futureAge + " years old!");

if (futureAge < 0) {
  //invalid response
  alert("Whoops... looks like you went backwards.")
} else if (futureAge > 100) {
  
  //too far forward
  alert("Looks like you might have to figure out immortality!");
}


alert("Well done, " + name + "!");
}
