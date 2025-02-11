// sketch.js - Interactive 3D Jellyfish Animation
// Author: [Your Name]
// Date: [Current Date]

// Constants
const NUM_JELLYFISH = 5;
const TANK_WIDTH = 200;
const TANK_HEIGHT = 400;
const TANK_DEPTH = 200;

// Globals
let jellyfishList = [];
let canvasContainer;
let centerHorz, centerVert;

class Jellyfish {
  constructor(x, y, z) {
    this.baseX = x;
    this.baseY = y;
    this.baseZ = z;
    this.numTentacles = 8;
    this.floatSpeed = random(0.01, 0.03);
    this.floatHeight = random(5, 15);
    this.tentacleOffsets = Array.from({ length: this.numTentacles }, () => random(1000));
  }

  update() {
    this.x = this.baseX + sin(frameCount * 0.01) * 5;
    this.y = this.baseY + sin(frameCount * this.floatSpeed) * this.floatHeight;
    this.z = this.baseZ + cos(frameCount * 0.01) * 5;
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    scale(0.5);

    // Draw body
    fill(255, 182, 193, 240);
    noStroke();
    ellipsoid(30, 20);
    
    // Draw tentacles
    for (let i = 0; i < this.numTentacles; i++) {
      push();
      
      let angle = TWO_PI / this.numTentacles * i;
      let xOffset = cos(angle) * 15;
      let zOffset = sin(angle) * 15;
      let baseX = xOffset;
      let baseY = 10;
      let baseZ = zOffset;
      
      stroke(255, 182, 193, 180);
      strokeWeight(2);
      noFill();
      
      beginShape();
      vertex(baseX, baseY, baseZ);
      
      let noiseOffset = this.tentacleOffsets[i];
      let sway1 = sin(frameCount * 0.05 + noiseOffset) * 10;
      let sway2 = cos(frameCount * 0.03 + noiseOffset) * 10;
      
      bezierVertex(
        baseX + sway1, baseY + 30, baseZ + sway2,
        baseX - sway2, baseY + 60, baseZ - sway1,
        baseX + sway1, baseY + 90, baseZ + sway2
      );
      
      bezierVertex(
        baseX - sway1, baseY + 120, baseZ - sway2,
        baseX + sway2, baseY + 150, baseZ + sway1,
        baseX, baseY + 160, baseZ
      );
      
      endShape();
      pop();
    }
    
    pop();
  }
}

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2;
  centerVert = canvasContainer.height() / 2;
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
}

function setup() {
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(600, 600, WEBGL);  // Fixed canvas size of 600x600
  canvas.parent("canvas-container");

  // Create jellyfish with original position ranges
  for (let i = 0; i < NUM_JELLYFISH; i++) {
    let x = random(-80, 80);
    let y = random(-100, 100);
    let z = random(-70, 70);
    jellyfishList.push(new Jellyfish(x, y, z));
  }

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();
}

function draw() {
  background(0);
  orbitControl();

  // Draw tank with original dimensions
  noFill();
  stroke(255);
  strokeWeight(3);
  box(TANK_WIDTH, TANK_HEIGHT, TANK_DEPTH);

  // Update and draw jellyfish
  for (let jellyfish of jellyfishList) {
    jellyfish.update();
    jellyfish.display();
  }

  // Draw water
  push();
  fill(0, 100, 255, 70);
  noStroke();
  translate(0, 5, 0);
  box(TANK_WIDTH, TANK_HEIGHT - 10, TANK_DEPTH);
  pop();
}

function mousePressed() {
  // Add interaction if desired
}