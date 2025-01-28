// sketch.js - Interactive full circle fire simulation
// Author: Pallavi Rajeev
// Date: Jan. 27, 2025

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js


// Globals
// Constants
// Forest Fire Simulation with Web Integration
// Adapted for responsive web container

let treeDensity = 60;
let ground = 0;
let tree = 1;
let burned = -1;
let groundColor, treeColor, burnedColor;
let forest;
let smokeParticles = [];
let fireSound;
let water;

function preload() {
  fireSound = new Audio('assets/fire.mp3');
  water = new Audio('assets/water.mp3');
}

function setup() {
  // Create canvas within container and get its dimensions
  const canvasContainer = select('#canvas-container');
  const canvas = createCanvas(canvasContainer.width, canvasContainer.height);
  canvas.parent('canvas-container');
  
  groundColor = color(65, 35, 0);
  treeColor = color(46, 71, 36);
  burnedColor = color(30, 20, 10);
  
  initializeForest();
}

function initializeForest() {
  forest = [];
  
  for (let y = 0; y < height; y++) {
    forest[y] = [];
    for (let x = 0; x < width; x++) {
      if (random(100) < treeDensity) {
        forest[y][x] = tree;
      } else {
        forest[y][x] = ground;
      }
    }
  }
}

function draw() {
  loadPixels();
  
  if (mouseIsPressed) {
    fireSound.play();
    
    // Start fire where mouse is pressed
    let x = int(mouseX);
    let y = int(mouseY);
  
    // Ensure mouse is within canvas
    if (x >= 0 && x < width && y >= 0 && y < height) {
      forest[y][x] = burned;
    }
  }
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      burn(x, y);
      
      let value = forest[y][x];
      if (value === ground) {
        set(x, y, groundColor);
      } else if (value === tree) {
        set(x, y, treeColor);
      } else if (value === 2) {  // Water state
        set(x, y, color(0, 100, 255));
      } else if (value === burned) {
        if (random(1) < 0.05) {  // 5% chance of red patch
          let redPatch = color(
            random(180, 255),  // Bright red range
            random(0, 50),     // Low green
            random(0, 50)      // Low blue
          );
          set(x, y, redPatch);
        } else {
          set(x, y, burnedColor);
        }
        
        // Create smoke when tree burns
        if (random(1) < 0.03) { // 3% chance of smoke
          smokeParticles.push(new SmokeParticle(x, y));
        }
      }
    }
  }
  updatePixels();
  
  // Update and draw smoke particles
  for (let i = smokeParticles.length - 1; i >= 0; i--) {
    smokeParticles[i].update();
    smokeParticles[i].display();
    
    if (smokeParticles[i].isFinished()) {
      smokeParticles.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key === 'w') {
    fireSound.pause();
    water.play();
    // Turn burned areas blue before resetting
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (forest[y][x] === burned) {
          forest[y][x] = 2; // New water state
        }
      }
    }
    
    // Brief delay to show water before reset
    setTimeout(() => {
      initializeForest();
      smokeParticles = [];
    }, 2000);
  }
}

function burn(x, y) {
  if (forest[y][x] != burned) {
    return;
  }
  
  if (x-1 >= 0 && forest[y][x-1] === tree) {
    forest[y][x-1] = burned;
  }
  
  if (x+1 < width && forest[y][x+1] === tree) {
    forest[y][x+1] = burned;
  }
  
  if (y-1 >= 0 && forest[y-1][x] === tree) {
    forest[y-1][x] = burned;
  }
  
  if (y+1 < height && forest[y+1][x] === tree) {
    forest[y+1][x] = burned;
  }
}

class SmokeParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(1, 3);
    this.alpha = 150;
    this.speed = random(0.1, 1.0);
    this.direction = createVector(random(-1, 1), random(-2, -1));
  }
  
  update() {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
    this.alpha -= 2;
    this.size -= 0.1;
  }
  
  display() {
    noStroke();
    fill(160, 160, 160, this.alpha);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  isFinished() {
    return this.alpha <= 0 || this.size <= 0;
  }
}

// Handle window resizing
function windowResized() {
  const canvasContainer = select('#canvas-container');
  resizeCanvas(canvasContainer.width, canvasContainer.height);
  initializeForest();
  smokeParticles = [];
}
