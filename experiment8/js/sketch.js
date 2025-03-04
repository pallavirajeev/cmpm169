// sketch.js - Interactive Surveillance Map Visualization
// Author: Pallavi Rajeev
// Date: February 24, 2025

let sentiment;
let backgroundColor = [200, 200, 200]; // Default gray

function preload() {
  // Load the sentiment analysis model
  sentiment = ml5.sentiment("MovieReviews");
}

function setup() {
  // Create the canvas and place it inside the canvas container
  let canvas = createCanvas(800, 600); 
  canvas.parent('#canvas-container'); // Attach canvas to the canvas-container div
  
  // Link button to function
  select("#submit-btn").mousePressed(analyzeMood);
  
  // Allow Enter key to submit
  select("#mood-input").elt.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      analyzeMood();
    }
  });
}

function draw() {
  background(backgroundColor);
  
  // Display example color mappings at the bottom of the canvas
  textSize(14);
  fill(255);
  textAlign(LEFT, BOTTOM);
  text("Color guide: Positive (green) | Neutral (blue) | Negative (red)", 20, height - 20);
}

function analyzeMood() {
  const moodInput = select("#mood-input").value().trim();
  
  if (moodInput === "") {
    select("#result").html("Please enter a mood");
    return;
  }
  
  // Make prediction and use a callback function
  sentiment.predict(moodInput, gotResult);
}

function gotResult(prediction) {
  console.log(prediction);
  
  // Use confidence score instead of sentiment score
  const confidence = prediction.confidence;
  mapSentimentToColor(confidence);
  
  // Display result
  select("#result").html(`Sentiment confidence: ${confidence.toFixed(2)}`);
}

function mapSentimentToColor(confidence) {
  if (confidence >= 0.7) {
    backgroundColor = [100, map(confidence, 0.7, 1, 100, 255), 100]; // Green
  } else if (confidence >= 0.5) {
    backgroundColor = [100, 100, map(confidence, 0.5, 0.7, 180, 255)]; // Blue
  } else {
    backgroundColor = [map(confidence, 0, 0.5, 255, 180), 100, 100]; // Red
  }
}

function windowResized() {
  // Ensure canvas resizes with the window size
  resizeCanvas(600, 300); // Resize to match the container width
}

