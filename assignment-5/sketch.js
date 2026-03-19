//Expanding and Shrinking Shapes
//Nicholas Poulin Prototyping with Code Lab Section 3


//DATA: Arrays
let shapeX = [];      // x position
let shapeY = [];      // y position
let shapeType = [];   // "circle" or "square"
let shapeSize = [];   // current size
let shapeGrowing = []; // true = growing, false = shrinking


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}



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
      
      // Random starting size and direction
      shapeSize.push(0.6 + Math.random() * 0.4);
      shapeGrowing.push(Math.random() > 0.5);
    }
  }
  
  console.log("Total shapes:", shapeX.length);
  console.log("Sample data at index 0:");
  console.log("  Position:", shapeX[0], shapeY[0]);
  console.log("  Type:", shapeType[0]);
  console.log("  Size:", shapeSize[0]);


function draw() {
  background(255, 250, 240);
  
  let cellW = width / 16;
  let cellH = height / 16;
  
  //LOOP
  for (let i = 0; i < shapeX.length; i++) {
    // Update size (grow or shrink)
    if (shapeGrowing[i]) {
      shapeSize[i] += 0.01;
      if (shapeSize[i] > 1.0) {
        shapeGrowing[i] = false; // Switch to shrinking
      }
    } else {
      shapeSize[i] -= 0.01;
      if (shapeSize[i] < 0.6) {
        shapeGrowing[i] = true; // Switch to growing
      }
    }
    
    // Draw based on type
    if (shapeType[i] === "circle") {
      // Pink circles
      fill(255, 107, 129);
      ellipse(shapeX[i], shapeY[i], cellW * 0.7 * shapeSize[i], cellH * 0.7 * shapeSize[i]);
      
      // Yellow center (inverse size)
      let innerSize = map(shapeSize[i], 0.6, 1.0, 1.0, 0.6);
      fill(255, 200, 87);
      ellipse(shapeX[i], shapeY[i], cellW * 0.3 * innerSize, cellH * 0.3 * innerSize);
      
    } else {
      // Teal squares
      fill(64, 224, 208);
      rectMode(CENTER);
      rect(shapeX[i], shapeY[i], cellW * 0.5 * shapeSize[i], cellH * 0.5 * shapeSize[i], 8);
      
      // Coral center (inverse size)
      let innerSize = map(shapeSize[i], 0.6, 1.0, 1.0, 0.6);
      fill(255, 107, 129);
      ellipse(shapeX[i], shapeY[i], cellW * 0.2 * innerSize, cellH * 0.2 * innerSize);
    }
    
  
    
    // Display info
  fill(0);
  textSize(20);

    
    // Display date and time
  let currentdate = month() + "/" + day() + "/" + year();
  let currenttime = hour() + ":" + nf(minute(), 2) + ":" + nf(second(), 2);
  text("Date: " + currentdate, 300, 265);
  text("Time: " + currenttime, 300, 325);
    
  }

  function keyPressed() {
    if (key == "S" || key == "s") {
      saveCanvas("assignment[5]_Poulin_Nicholas");
    }
  }
}
