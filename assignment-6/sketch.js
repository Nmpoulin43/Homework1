//Nicholas Poulin
//Prototyping with Code Lab Section 03
//Assignment 6 - Drawing App


//State Variables
let brushType = "circle";  //Brush type
let brushSize = 30;        //Brush size
let hue = 0;               //Color hue (0-360)
let mirrorMode = false;    //Symmetrical drawing
let fadeMode = false;      //Trail effect
let uiHeight = 100;        //Top UI bar height

function setup() {
  createCanvas(1024, 768);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100);
  textFont('monospace');
}

function draw() {
  
  
  //Draw UI Bar
  drawUI();
  
  //Drawing Logic
  if (mouseIsPressed && mouseY > uiHeight) {
    drawBrush(mouseX, mouseY);
    
    // Mirror mode: draw symmetrically
    if (mirrorMode) {
      let mirrorX = width - mouseX;
      drawBrush(mirrorX, mouseY);
    }
  }
}

//Custom function: Draw based on brush type
function drawBrush(x, y) {
  noStroke();
  
  if (brushType === "circle") {
    fill(hue, 80, 90, 60);
    circle(x, y, brushSize);
    
  } else if (brushType === "square") {
    fill(hue, 80, 90, 60);
    rectMode(CENTER);
    push();
    translate(x, y);
    rotate(frameCount * 0.05);
    rect(0, 0, brushSize, brushSize);
    pop();
    
  } else if (brushType === "star") {
    fill(hue, 80, 90, 60);
    drawStar(x, y, brushSize * 0.3, brushSize * 0.6, 5);
    
  } else if (brushType === "spiral") {
    stroke(hue, 80, 90, 40);
    strokeWeight(3);
    noFill();
    let angle = frameCount * 0.1;
    let radius = brushSize * 0.5;
    for (let i = 0; i < 20; i++) {
      let px = x + cos(angle + i * 0.3) * (radius - i * 2);
      let py = y + sin(angle + i * 0.3) * (radius - i * 2);
      point(px, py);
    }
    
  } else if (brushType === "rainbow") {
    // Rainbow mode: cycle through colors automatically
    let rainbowHue = (frameCount * 3) % 360;
    fill(rainbowHue, 80, 90, 60);
    circle(x, y, brushSize);
    // Add smaller accent circles
    fill((rainbowHue + 120) % 360, 80, 90, 40);
    circle(x + random(-10, 10), y + random(-10, 10), brushSize * 0.5);
  }
}

//Draw a star shape
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//Draw UI
function drawUI() {
  // Background
  noStroke();
  fill(0, 0, 20);
  rect(0, 0, width, uiHeight);
  

  
  //Instructions
  fill(0, 0, 80);
  textSize(11);
  text("KEYS: 1-5 (Brush) | ↑↓ (Size) | ←→ (Color) | SPACE (Mirror) | F (Fade) | C (Clear) | S (Save)", 20, 50);
  
  //Current settings display
  textSize(13);
  fill(0, 0, 100);
  text("Brush: ", 20, 75);
  fill(hue, 80, 90);
  text(brushType.toUpperCase(), 80, 75);
  
  fill(0, 0, 100);
  text("Size: ", 220, 75);
  fill(hue, 80, 90);
  text(int(brushSize), 270, 75);
  
  fill(0, 0, 100);
  text("Mirror: ", 340, 75);
  fill(mirrorMode ? color(120, 80, 90) : color(0, 80, 70));
  text(mirrorMode ? "ON" : "OFF", 420, 75);
  
  
  //Color preview
  fill(hue, 80, 90);
  circle(650, 80, 30);
}

//Keyboard events
function keyPressed() {
  // Brush types
  if (key === '1') brushType = "circle";
  if (key === '2') brushType = "square";
  if (key === '3') brushType = "star";
  if (key === '4') brushType = "spiral";
  if (key === '5') brushType = "rainbow";
  
  //Size control
  if (keyCode === UP_ARROW) {
    brushSize = constrain(brushSize + 5, 10, 100);
  }
  if (keyCode === DOWN_ARROW) {
    brushSize = constrain(brushSize - 5, 10, 100);
  }
  
  //Color control
  if (keyCode === LEFT_ARROW) {
    hue = (hue - 10 + 360) % 360;
  }
  if (keyCode === RIGHT_ARROW) {
    hue = (hue + 10) % 360;
  }
  
  //Toggle modes
  if (key === ' ') {
    mirrorMode = !mirrorMode;
  }
  if (key === 'f' || key === 'F') {
    fadeMode = !fadeMode;
  }
  
  //Clear canvas
  if (key === 'c' || key === 'C') {
    background(0, 0, 100);
  }
  
  //Save canvas
  if (key === 's' || key === 'S') {
    saveCanvas("my_artwork_" + month() + "_" + day() + "_" + hour() + "_" + minute(), "png");
  }
}

//Mouse events
function mousePressed() {
  // Allow single clicks to draw too
  if (mouseY > uiHeight) {
    drawBrush(mouseX, mouseY);
    if (mirrorMode) {
      let mirrorX = width - mouseX;
      drawBrush(mirrorX, mouseY);
    }
  }
}
