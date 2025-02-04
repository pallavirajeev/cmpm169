// // sketch.js - Animated Moon Trajectory with Dynamic Sky Coloration
// // Author: Pallavi Rajeev
// // Date: February 3,2025

// // Constants
// const INITIAL_RADIUS = 1000;
// const INITIAL_SPEED = 0.002;
// const MOON_SCALE = 0.25;

// class MoonAnimation {
//     constructor() {
//         this.sky = null;
//         this.moon = null;
//         this.angle = 0;
//         this.radius = INITIAL_RADIUS;
//         this.centerX = 0;
//         this.centerY = 0;
//         this.speed = INITIAL_SPEED;
//         this.useHours = false;
//     }

//     preload() {
//         this.sky = loadImage("assets/sky.jpg");
//         this.moon = loadImage("assets/moon1.gif");
//         // this.black = loadImage("assets/black.png")
//     }

//     setup() {
//         let canvasContainer = $("#canvas-container");
//         let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
//         canvas.parent("canvas-container");
        
//         // Adjust centering based on the container
//         this.centerX = width / 2 - 40;
//         this.centerY = height / 0.58;
        
//     }

//     calculateTintValue() {
//         colorMode(HSB, 360, 100, 100);
        
//         if (this.useHours) {
//             let currentHour = hour();
//             if (currentHour >= 0 && currentHour < 6) {
//                 return lerpColor(color(240, 100, 30), color(240, 80, 40), (currentHour - 0) / 6);
//             } else if (currentHour >= 6 && currentHour < 12) {
//                 return lerpColor(color(50, 100, 100), color(30, 90, 90), (currentHour - 6) / 6);
//             } else if (currentHour >= 12 && currentHour < 18) {
//                 return lerpColor(color(190, 80, 90), color(200, 70, 80), (currentHour - 12) / 6);
//             } else {
//                 return lerpColor(color(300, 80, 60), color(330, 70, 50), (currentHour - 18) / 6);
//             }
//         } else {
//             let s = second();
//             if (s >= 0 && s < 15) {
//                 return lerpColor(color(240, 100, 30), color(240, 80, 40), s / 15);
//             } else if (s >= 15 && s < 30) {
//                 return lerpColor(color(50, 100, 100), color(30, 90, 90), (s - 15) / 15);
//             } else if (s >= 30 && s < 45) {
//                 return lerpColor(color(190, 80, 90), color(200, 70, 80), (s - 30) / 15);
//             } else {
//                 return lerpColor(color(300, 80, 60), color(330, 70, 50), (s - 45) / 15);
//             }
//         }
//     }

//     draw() {
//         let tintValue = this.calculateTintValue();
        
//         // Scale sky to fit canvas exactly
//         tint(tintValue);
//         image(this.sky, 0, 0, width, height);
//         noTint();

//         let moonX = this.centerX - this.radius * cos(this.angle);
//         let moonY = this.centerY - this.radius * sin(this.angle);
        
//         let moonWidth = this.moon.width * MOON_SCALE;
//         let moonHeight = this.moon.height * MOON_SCALE;
        
//         image(this.moon, moonX, moonY, moonWidth, moonHeight);
        
//         this.angle += this.speed;

//         // Add text description
//         textSize(12);
//         fill(100); // White color
//         textAlign(LEFT, TOP);
    
//       let instructions = [
//         "Key Controls:",
//         "'H / S': Time mode (hours vs. seconds)",
//         "'1': Increase moon speed",
//         "'2': Decrease moon speed",
//         "Current Mode: " + (this.useHours ? "Hours" : "Seconds"),
//         "Current Speed: " + this.speed.toFixed(3)
//       ];

//       // Draw text with slight shadow for readability
//       for (let i = 0; i < instructions.length; i++) { 
//         // text(instructions[i], 10, 10 + i * 15);
//         fill(100)
//         text(instructions[i], 11, height - (instructions.length - i + 0.5) * 15);

//       }
//     }

//     keyPressed() {
//         console.log("Key pressed:", key);
        
//         switch(key.toLowerCase()) {
//             case 's':
//                 this.useHours = false;
//                 console.log("Using seconds for tint.");
//                 break;
//             case 'h':
//                 this.useHours = true;
//                 console.log("Using hours for tint.");
//                 break;
//             case '1':
//                 this.speed += 0.01;
//                 console.log("Speed increased:", this.speed);
//                 break;
//             case '2':
//                 this.speed = max(0.001, this.speed - 0.01);
//                 console.log("Speed decreased:", this.speed);
//                 break;
//         }
//     }

//     // Add resize handling
//     windowResized() {
//         let canvasContainer = $("#canvas-container");
//         resizeCanvas(canvasContainer.width(), canvasContainer.height());
        
//         // Recalculate center
//         this.centerX = width / 3;
//         this.centerY = height / 0.7;
//     }
// }

// // Global instance
// let moonAnimation;

// function preload() {
//     moonAnimation = new MoonAnimation();
//     moonAnimation.preload();
// }

// function setup() {
//     moonAnimation.setup();
// }

// function draw() {
//     moonAnimation.draw();
// }

// function keyPressed() {
//     moonAnimation.keyPressed();
// }

// function windowResized() {
//     if (moonAnimation) {
//         moonAnimation.windowResized();
//     }
// }

//___________________________________________________________________________________//
const INITIAL_RADIUS = 650;
const INITIAL_SPEED = 0.002;
const MOON_SCALE = 0.25;

class MoonAnimation {
    constructor() {
        this.sky = null;
        this.moon = null;
        this.angle = 0;
        this.radius = INITIAL_RADIUS;
        this.centerX = 0;
        this.centerY = 0;
        this.speed = INITIAL_SPEED;
        this.useHours = false;
    }

    preload() {
        this.sky = loadImage("assets/sky.jpg");
        this.moon = loadImage("assets/moon1.gif");
    }

    setup() {
        let canvasContainer = $("#canvas-container");
        // let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
        let canvas = createCanvas(this.sky.width, this.sky.height);

        // canvas.parent("canvas-container");
        let x = (canvasContainer.width() - this.sky.width) / 2 + 50;
        let y = (canvasContainer.height() - this.sky.height) / 2 + 100;
        canvas.position(x, y);

        
        // Center the sky image within the canvas
        this.skyOffsetX = 0;
        this.skyOffsetY = 0;
        
        // Adjust moon trajectory center based on sky image position
        this.centerX = this.skyOffsetX + this.sky.width / 3;
        this.centerY = this.skyOffsetY + this.sky.height / 0.7;
    }

    calculateTintValue() {
        colorMode(HSB, 360, 100, 100);
        
        if (this.useHours) {
            let currentHour = hour();
            if (currentHour >= 0 && currentHour < 6) {
                return lerpColor(color(240, 100, 30), color(240, 80, 40), (currentHour - 0) / 6);
            } else if (currentHour >= 6 && currentHour < 12) {
                return lerpColor(color(50, 100, 100), color(30, 90, 90), (currentHour - 6) / 6);
            } else if (currentHour >= 12 && currentHour < 18) {
                return lerpColor(color(190, 80, 90), color(200, 70, 80), (currentHour - 12) / 6);
            } else {
                return lerpColor(color(300, 80, 60), color(330, 70, 50), (currentHour - 18) / 6);
            }
        } else {
            let s = second();
            if (s >= 0 && s < 15) {
                return lerpColor(color(240, 100, 30), color(240, 80, 40), s / 15);
            } else if (s >= 15 && s < 30) {
                return lerpColor(color(50, 100, 100), color(30, 90, 90), (s - 15) / 15);
            } else if (s >= 30 && s < 45) {
                return lerpColor(color(190, 80, 90), color(200, 70, 80), (s - 30) / 15);
            } else {
                return lerpColor(color(300, 80, 60), color(330, 70, 50), (s - 45) / 15);
            }
        }
    }

    draw() {
        // Clear the background
        // background(0);
        clear();
        
        let tintValue = this.calculateTintValue();
        
        // Draw sky image at its original size, centered in the container
        tint(tintValue);
        image(this.sky, this.skyOffsetX, this.skyOffsetY);
        noTint();

        let moonX = this.centerX - this.radius * cos(this.angle);
        let moonY = this.centerY - this.radius * sin(this.angle);
        
        let moonWidth = this.moon.width * MOON_SCALE;
        let moonHeight = this.moon.height * MOON_SCALE;
        
        image(this.moon, moonX, moonY, moonWidth, moonHeight);
        
        this.angle += this.speed;
    }

    keyPressed() {
        console.log("Key pressed:", key);
        
        switch(key.toLowerCase()) {
            case 's':
                this.useHours = false;
                console.log("Using seconds for tint.");
                break;
            case 'h':
                this.useHours = true;
                console.log("Using hours for tint.");
                break;
            case '1':
                this.speed += 0.01;
                console.log("Speed increased:", this.speed);
                break;
            case '2':
                this.speed = max(0.001, this.speed - 0.01);
                console.log("Speed decreased:", this.speed);
                break;
        }
    }

    // Add resize handling
    windowResized() {
        let canvasContainer = $("#canvas-container");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
        
        // Recenter sky image
        this.skyOffsetX = (width - this.sky.width) / 2;
        this.skyOffsetY = (height - this.sky.height) / 2;
        
        // Recalculate center
        this.centerX = this.skyOffsetX + this.sky.width / 3;
        this.centerY = this.skyOffsetY + this.sky.height / 0.7;
    }
}

// Global instance
let moonAnimation;

function preload() {
    moonAnimation = new MoonAnimation();
    moonAnimation.preload();
}

function setup() {
    moonAnimation.setup();
}

function draw() {
    moonAnimation.draw();
}

function keyPressed() {
    moonAnimation.keyPressed();
}

function windowResized() {
    if (moonAnimation) {
        moonAnimation.windowResized();
    }
}