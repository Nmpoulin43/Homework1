function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  textSize(height / 16);
  text("Assignment[1]= FROZEN Click to open sketch", width / 2, height / 2);
}

function mousePressed() {
  window.open(
    "https://studio.code.org/c/2773864793",
    "_blank"
  );
}

// This function is called any time the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
