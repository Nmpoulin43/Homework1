//Nicholas Poulin - Lab Group 3 Assignment 3
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(200, 60, 90);
  
  let cx = width * 0.5;
  let cy = height * 0.5;
  let scaleUnit = height / 15;
  
  //Mountain
  noStroke();
  fill(0, 0, 95);
  beginShape();
    vertex(0, height);
    vertex(width * 0.15, height * 0.6);
    vertex(width * 0.4, height * 0.25);
    vertex(width * 0.7, height * 0.55
          );
    vertex(width, height * 0.4);
    vertex(width, height);
  endShape(CLOSE);
  
  //Mountain Shadow
  fill(200, 20, 85, 0.3);
  beginShape();
    vertex(width * 0.4, height * 0.25);
    vertex(width * 0.45, height * 0.35);
    vertex(width * 0.5, height * 0.6);
    vertex(width * 0.4, height);
    vertex(0, height);
    vertex(width * 0.15, height * 0.6);
  endShape(CLOSE);
  
  
  noFill();
  stroke(200, 15, 80, 0.4);
  strokeWeight(scaleUnit * 0.3);
  bezier(
  cx - scaleUnit * 0.4, cy - scaleUnit * 2,
  cx + scaleUnit * 2, cy,
  cx - scaleUnit * 1.5, cy + scaleUnit * 3,
  width * 0.8, height * 0.9);
  
  
  stroke(30, 80, 40);
  strokeWeight(scaleUnit * 0.15);
  strokeCap(ROUND);
  line(cx + scaleUnit * 3, cy + scaleUnit * 6, cx + scaleUnit * 6, cy + scaleUnit * 6.2);
  line(cx + scaleUnit * 3, cy + scaleUnit * 5.5, cx + scaleUnit * 6, cy + scaleUnit * 5.7);
  
// Legs
      stroke(220, 70, 30);
      strokeWeight(scaleUnit * 0.18);
      line(cx + scaleUnit * 4, cy + scaleUnit * 4, cx + scaleUnit * 4.5, cy + scaleUnit * 6);
      line(cx + scaleUnit * 4, cy + scaleUnit * 4, cx + scaleUnit * 4, cy + scaleUnit * 5.4);
      
  
      // Body
      stroke(0, 80, 50);
      strokeWeight(scaleUnit * 0.22);
      line(cx + scaleUnit * 4, cy + scaleUnit * 4, cx + scaleUnit * 4, cy + scaleUnit * 3);
      
      // Arms with poles
      stroke(0, 80, 50);
      strokeWeight(scaleUnit * 0.16);
      line(cx + scaleUnit * 4, cy + scaleUnit * 3, cx + scaleUnit * 3.3, cy + scaleUnit * 3.5);
      line(cx + scaleUnit * 4, cy + scaleUnit * 3, cx + scaleUnit * 4.8, cy + scaleUnit * 3.5);
      
      // Ski poles
      stroke(0, 0, 40);
      strokeWeight(scaleUnit * 0.08);
      line(cx + scaleUnit * 3.3, cy + scaleUnit * 3.5, cx + scaleUnit * 3.3, cy + scaleUnit * 5);
      line(cx + scaleUnit * 4.8, cy + scaleUnit * 3.5, cx + scaleUnit * 4.8, cy + scaleUnit * 5);
      
      // Head
      noStroke();
      fill(20, 50, 90);
      circle(cx + scaleUnit * 4, cy + scaleUnit * 2.7, scaleUnit * 0.7);
      
      // Helmet
      fill(0, 90, 60);
      arc(cx + scaleUnit * 4, cy + scaleUnit * 2.6, scaleUnit * 0.7, scaleUnit * 0.55,PI, 2 * PI);
      
      // Goggles
      fill(180, 60, 40);
      ellipse(cx + scaleUnit * 4, cy + scaleUnit * 2.7, scaleUnit * 0.5, scaleUnit * 0.2);
      
        
  textSize(20);
  text('Nick Poulin', cx + scaleUnit * 5.5, cy + scaleUnit * 7);
  
  
}