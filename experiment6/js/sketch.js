// sketch.js - Blackout Poetry Interactive Visualization
// Author: Pallavi Rajeev
// Date: February 17, 2025

// Constants
const FONT_SIZE = 25;
const TEXT_COLOR = 255;
const HIDDEN_TEXT_COLOR = "rgb(111,111,111)";
const BACKGROUND_COLOR = "rgb(239,138,222)";
const MARGIN = 50;
const LINE_HEIGHT = 30;
const TEXT_Y_START = 300;

// Original scary texts and hidden romantic texts
const ORIGINAL_TEXTS = [
    "the door slowly creaked open and revealed a figure hidden within the darkest parts of the shadows",
    "a quiet tapping interrupted the eery silence but upon first look there seemed to be nothing there",
    "a trembling hand reached forward as moonlight revealed a blood-splattered canvas with stench thick in the air",
];

const HIDDEN_TEXTS = [
    "the way you look at me warms my body during the cool summer nights we spend together",
    "the temperature of your breath against me contrasts the windy breezes of the beaches we lay on",
    "your soft thumbs linger along the corners of my saddened eyes wiping away all feelings of sorrow",
];

// Globals
let canvasContainer;
let blackoutPoem;
let centerHorz, centerVert;

class BlackoutPoem {
    constructor() {
        this.reset();
    }

    reset() {
        let randomIndex = floor(random(ORIGINAL_TEXTS.length));
        this.wordsOriginal = ORIGINAL_TEXTS[randomIndex].split(" ");
        this.wordsHidden = HIDDEN_TEXTS[randomIndex].split(" ");
        this.blackout = new Array(this.wordsOriginal.length).fill(false);
        this.blackoutHistory = new Array(this.wordsOriginal.length).fill(false);
        this.isHiddenWord = new Array(this.wordsOriginal.length).fill(false);
    }

    draw() {
        background(BACKGROUND_COLOR);
        textSize(FONT_SIZE);
        
        let x = MARGIN;
        let y = TEXT_Y_START;
        
        for (let i = 0; i < this.wordsOriginal.length; i++) {
            let word = this.wordsOriginal[i];
            
            if (this.blackout[i]) {
                fill(0);
                rect(x - 2, y - 18, textWidth(word) + 4, 22);
            } else {
                fill(this.isHiddenWord[i] ? HIDDEN_TEXT_COLOR : TEXT_COLOR);
                text(word, x, y);
            }
            
            x += textWidth(word) + 10;
            if (x > width - MARGIN * 2) {
                x = MARGIN;
                y += LINE_HEIGHT;
            }
        }
    }

    handleClick(mouseX, mouseY) {
        let x = MARGIN;
        let y = TEXT_Y_START;
        
        for (let i = 0; i < this.wordsOriginal.length; i++) {
            let word = this.wordsOriginal[i];
            let w = textWidth(word) + 10;
            
            if (mouseX > x - 2 && mouseX < x + w && mouseY > y - 18 && mouseY < y + 4) {
                this.blackout[i] = !this.blackout[i];
                this.blackoutHistory[i] = this.blackout[i];
            }
            
            x += w;
            if (x > width - MARGIN * 2) {
                x = MARGIN;
                y += LINE_HEIGHT;
            }
        }
    }

    revealHidden() {
        for (let i = 0; i < this.blackout.length; i++) {
            if (this.blackout[i]) {
                this.wordsOriginal[i] = this.wordsHidden[i];
                this.isHiddenWord[i] = true;
                this.blackout[i] = false;
            }
        }
    }

    restoreBlackouts() {
        for (let i = 0; i < this.blackoutHistory.length; i++) {
            if (this.blackoutHistory[i]) {
                this.blackout[i] = true;
            }
        }
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
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    
    blackoutPoem = new BlackoutPoem();
    
    $(window).resize(function() {
        resizeScreen();
    });
    resizeScreen();
}

function draw() {
    blackoutPoem.draw();
}

function mousePressed() {
    blackoutPoem.handleClick(mouseX, mouseY);
}

function keyPressed() {
    if (key === ' ') {
        blackoutPoem.revealHidden();
    } else if (key === 'B' || key === 'b') {
        blackoutPoem.restoreBlackouts();
    } else if (key === 'R' || key === 'r') {
        blackoutPoem.reset();
    }
}