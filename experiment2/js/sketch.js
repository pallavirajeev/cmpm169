// sketch.js - Interactive particle system with stars and trees
// Author: Pallavi Rajeev
// Date: Jan. 20, 2025

// Globals
let stars = [], trees = [], particles = { maroon: [], blue: [], yellow: [] };
let flowfields = { maroon: [], blue: [], yellow: [] }, inc = 0.01, scl = 10, cols, rows, zoff = 0;
let gammaHigh = false, betaHigh = false, alphaHigh = false;
let data = { maroon: 1000, blue: 1000, yellow: 1000 };
let frameRateDisplay;
let alphaValue = 255;
let alphaDirection = -1;

function setup() {
  // Create canvas within container and get its dimensions
  const canvasContainer = select('#canvas-container');
  const canvas = createCanvas(canvasContainer.width, canvasContainer.height);
  canvas.parent('canvas-container');
  
  // Initialize core variables
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  // Initialize all components
  initializeParticles();
  initializeStars();
  initializeTrees();
  
  // Set initial states
  gammaHigh = true;
  betaHigh = true;
  alphaHigh = true;
  
  // Set up data update interval
  setInterval(updateData, 5000);
  
  // background(2,27,51);
  background(27);

}

function draw() {
  drawStars();
  drawTrees();
  updateFlowfields();
  updateParticles();
  
  if (frameRateDisplay) {
    frameRateDisplay.html(floor(frameRate()));
  }
}

function initializeParticles() {
  for (let i = 0; i < 1000; i++) {
    for (let key of Object.keys(particles)) {
      particles[key].push(new Particle());
    }
  }
  for (let key of Object.keys(flowfields)) {
    flowfields[key] = new Array(cols * rows);
  }
}

function initializeStars() {
  for (let i = 0; i < 200; i++) {
    stars.push(new Star(random(width), random(height), random(1, 3)));
  }
}

function initializeTrees() {
  const numTrees = 3, spacing = width / numTrees;
  for (let i = 0; i < numTrees; i++) {
    trees.push({
      x: random(i * spacing, (i + 1) * spacing),
      height: 100,
      levels: floor(random(3, 5))
    });
  }
}

function updateData() {
  for (let key of Object.keys(data)) {
    data[key] = random(500, 2000);
  }
}

function updateFlowfields() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      const index = x + y * cols;
      for (let key of Object.keys(flowfields)) {
        const angle = noise(xoff, yoff, zoff) * TWO_PI;
        const vector = p5.Vector.fromAngle(angle).setMag(5);
        flowfields[key][index] = vector;
      }
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.0003;
}

function updateParticles() {
  for (let key of Object.keys(particles)) {
    if ((key === 'maroon' && gammaHigh) || (key === 'blue' && betaHigh) || (key === 'yellow' && alphaHigh)) {
      particles[key].forEach(p => {
        p.follow(flowfields[key]);
        p.update();
        p.edges();
        p.show(key);
      });
    }
  }
}

function drawStars() {
  stars.forEach(star => star.show());
}

function drawTrees() {
  trees.forEach(tree => {
    push();
    translate(tree.x, height - tree.height);
    drawTree(tree.height, tree.levels);
    pop();
  });
}

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    noStroke();
    let r = random(200, 255);
    let g = random(150, 255);
    let b = random(0, 100);
    let alpha = random(50, 255);
    fill(r, g, b, alpha);
    ellipse(this.x, this.y, this.size);
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 2;
    this.prevPos = this.pos.copy();
  }

  follow(vectors) {
    const x = floor(this.pos.x / scl);
    const y = floor(this.pos.y / scl);
    const index = x + y * cols;
    if (vectors[index]) {
      this.applyForce(vectors[index]);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc).limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edges() {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
    this.prevPos.set(this.pos);
  }

  show(color) {
    const colors = {
      maroon: [random(50, 150), random(180, 255), random(120, 200)],
      blue: [random(80, 180), random(180, 255), random(220, 255)],
      yellow: [random(100, 160), random(220, 255), random(140, 220)]
    };
    stroke(...colors[color], 50);
    strokeWeight(0.5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}

function drawTree(height, levels) {
  strokeWeight(10);
  line(0, 0, 0, -height);
  translate(0, -height + 200);
  for (let i = 0; i < levels; i++) {
    const layerWidth = height * (levels - i) * 0.4;
    const layerHeight = height * 0.5;
    beginShape();
    vertex(-layerWidth / 2, 0);
    vertex(0, -layerHeight);
    vertex(layerWidth / 2, 0);
    fill(0);
    endShape(CLOSE);
    translate(0, -layerHeight * 0.8);
  }
}

function windowResized() {
  const canvasContainer = select('#canvas-container');
  resizeCanvas(canvasContainer.width, canvasContainer.height);
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  // Reinitialize components for new dimensions
  initializeParticles();
  initializeStars();
  initializeTrees();
}