//Decorative Pattern
//Nicholas Poulin Prototyping with Code Lab Section 3



let shapeX = [];      // x position
let shapeY = [];      // y position
let shapeType = [];   // "circle" or "square"

function setup() {
  createCanvas(1024, 1024);
  noLoop(); // Static image, no animation
  
  // Initialize the grid pattern
  let cols = 16;
  let rows = 16;
  let cellW = 1024 / cols;
  let cellH = 1024 / rows;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let centerX = j * cellW + cellW / 2;
      let centerY = i * cellH + cellH / 2;
      
      // Store shape data
      shapeX.push(centerX);
      shapeY.push(centerY);
      
      // Determine type based on checkerboard pattern
      if ((i + j) % 2 === 0) {
        shapeType.push("circle");
      } else {
        shapeType.push("square");
      }
    }
  }
  
  console.log("Total shapes:", shapeX.length);
}

function draw() {
  background(255, 250, 240);
  
  let cellW = width / 16;
  let cellH = height / 16;
  
  // Draw all shapes
  for (let i = 0; i < shapeX.length; i++) {
    if (shapeType[i] === "circle") {
      // Pink circles
      fill(255, 107, 129);
      ellipse(shapeX[i], shapeY[i], cellW * 0.7, cellH * 0.7);
      
      // Yellow center
      fill(255, 200, 87);
      ellipse(shapeX[i], shapeY[i], cellW * 0.3, cellH * 0.3);
      
    } else {
      // Teal squares
      fill(64, 224, 208);
      rectMode(CENTER);
      rect(shapeX[i], shapeY[i], cellW * 0.5, cellH * 0.5, 8);
      
      // Coral center
      fill(255, 107, 129);
      ellipse(shapeX[i], shapeY[i], cellW * 0.2, cellH * 0.2);
    }
  }
  function keyPressed() {
    if (key == "S" || key == "s") {
      saveCanvas("assignment[5]_Poulin_Nicholas");
    }
  
}
}
