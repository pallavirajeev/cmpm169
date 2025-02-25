// sketch.js - Interactive Surveillance Map Visualization
// Author: Pallavi Rajeev
// Date: February 24, 2025


let countries = [
  { name: "CHINA", lat: 35, lon: 105 },
  { name: "UNITED KINGDOM", lat: 54, lon: -2 },
  { name: "INDIA", lat: 20, lon: 82 },
  { name: "SINGAPORE", lat: 1.3521, lon: 103.8198 },
  { name: "IRAQ", lat: 33, lon: 44 },
  { name: "RUSSIA", lat: 60, lon: 100 },
  { name: "AUSTRALIA", lat: -25, lon: 135 },
  { name: "UNITED STATES", lat: 40, lon: -100 },
  { name: "TAIWAN", lat: 23.5, lon: 121 },
  { name: "SOUTH KOREA", lat: 36, lon: 128 },
  { name: "THAILAND", lat: 15, lon: 100 },
  { name: "HONG KONG", lat: 22.3, lon: 114.2 },
  { name: "TURKEY", lat: 39, lon: 35 },
  { name: "GERMANY", lat: 51, lon: 10 },
  { name: "MEXICO", lat: 23, lon: -102 },
  { name: "SPAIN", lat: 40, lon: -3 },
  { name: "VIETNAM", lat: 16, lon: 107 },
  { name: "FRANCE", lat: 47, lon: 2 },
  { name: "GREECE", lat: 39, lon: 22 },
  { name: "CANADA", lat: 56, lon: -106 },
  { name: "SOUTH AFRICA", lat: -30, lon: 25 },
  { name: "ITALY", lat: 42, lon: 12 },
  { name: "EGYPT", lat: 26, lon: 30 },
  { name: "ARGENTINA", lat: -34, lon: -64 },
  { name: "JAPAN", lat: 36, lon: 138 },
  { name: "BRAZIL", lat: -14, lon: -52 },
  { name: "ISRAEL", lat: 31, lon: 35 },
  { name: "UGANDA", lat: 1, lon: 32 },
  { name: "PAKISTAN", lat: 30, lon: 70 },
  { name: "MOROCCO", lat: 32, lon: -6 },
  { name: "BANGLADESH", lat: 24, lon: 90 },
  { name: "INDONESIA", lat: -5, lon: 120 },
  { name: "COLOMBIA", lat: 4, lon: -72 },
  { name: "PERU", lat: -10, lon: -76 },
  { name: "SUDAN", lat: 16, lon: 30 },
  { name: "MALAYSIA", lat: 4, lon: 102 },
  { name: "MYANMAR", lat: 21, lon: 96 },
  { name: "CHILE", lat: -30, lon: -71 },
  { name: "KENYA", lat: 1, lon: 38 },
  { name: "DOMINICAN REP.", lat: 19, lon: -70 },
  { name: "MADAGASCAR", lat: -18, lon: 47 },
  { name: "IRAN", lat: 32, lon: 53 },
  { name: "PHILIPPINES", lat: 13, lon: 122 },
  { name: "PARAGUAY", lat: -23, lon: -58 },
  { name: "IVORY COAST", lat: 7, lon: -5 },
  { name: "SENEGAL", lat: 14, lon: -14 },
  { name: "ANGOLA", lat: -11, lon: 17 },
  { name: "ETHIOPIA", lat: 9, lon: 40 },
  { name: "AFGHANISTAN", lat: 33, lon: 66 },
  { name: "SAUDI ARABIA", lat: 24, lon: 45 },
  { name: "NIGERIA", lat: 9, lon: 8 }
];


let cities = [
  { name: "Taiyuan", lat: 37.8706, lon: 112.5489, cameras: 465255 },
  { name: "Wuxi", lat: 31.5497, lon: 120.3126, cameras: 300000 },
  { name: "London", lat: 51.5074, lon: -0.1278, cameras: 691000 },
  { name: "Indore", lat: 22.7196, lon: 75.8577, cameras: 200600 },
  { name: "Changsha", lat: 28.2282, lon: 112.9388, cameras: 262000 },
  { name: "Beijing", lat: 39.9042, lon: 116.4074, cameras: 1150000 },
  { name: "Hangzhou", lat: 30.2741, lon: 120.1551, cameras: 400000 },
  { name: "Qingdao", lat: 36.0671, lon: 120.3826, cameras: 262000 },
  { name: "Kunming", lat: 25.038, lon: 102.7183, cameras: 200000 },
  { name: "Xiamen", lat: 24.4798, lon: 118.0894, cameras: 150000 },
  { name: "Harbin", lat: 45.8038, lon: 126.5349, cameras: 250000 },
  { name: "Hyderabad", lat: 17.385044, lon: 78.486671, cameras: 375000 },
  { name: "Suzhou", lat: 31.2989, lon: 120.5853, cameras: 270000 },
  { name: "Shanghai", lat: 31.2304, lon: 121.4737, cameras: 1000000 },
  { name: "Urumqi", lat: 43.8256, lon: 87.6168, cameras: 160000 },
  { name: "Delhi", lat: 28.6139, lon: 77.2090, cameras: 551500 },
  { name: "Chengdu", lat: 30.5728, lon: 104.0668, cameras: 310000 },
  { name: "Shenzhen", lat: 22.5431, lon: 114.0579, cameras: 400000 },
  { name: "Ji'nan", lat: 36.6512, lon: 117.1201, cameras: 160000 },
  { name: "Shenyang", lat: 41.8057, lon: 123.4315, cameras: 200000 },
  { name: "Hefei", lat: 31.8206, lon: 117.2272, cameras: 113795 },
  { name: "Nanjing", lat: 32.0603, lon: 118.7969, cameras: 238000 },
  { name: "Tianjin", lat: 39.3434, lon: 117.3616, cameras: 350000 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707, cameras: 280000 },
  { name: "Wuhan", lat: 30.5928, lon: 114.3055, cameras: 200000 },
  { name: "Changchun", lat: 43.8176, lon: 125.3235, cameras: 100000 },
  { name: "Guangzhou", lat: 23.1291, lon: 113.2644, cameras: 300000 },
  { name: "Nanchang", lat: 28.6820, lon: 115.8575, cameras: 78260 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198, cameras: 108981 },
  { name: "Zhengzhou", lat: 34.7466, lon: 113.6254, cameras: 100000 },
  { name: "Chongqing", lat: 29.5630, lon: 106.5516, cameras: 290000 },
  { name: "Dongguan", lat: 23.0207, lon: 113.7518, cameras: 125145 },
  { name: "Baghdad", lat: 33.3152, lon: 44.3661, cameras: 120000 },
  { name: "Moscow", lat: 55.7558, lon: 37.6173, cameras: 203600 },
  { name: "Wenzhou", lat: 27.9949, lon: 120.6994, cameras: 55144 },
  { name: "Foshan", lat: 23.0215, lon: 113.1214, cameras: 100000 },
  { name: "Nanning", lat: 22.8170, lon: 108.3669, cameras: 53430 },
  { name: "Shijiazhuang", lat: 38.0428, lon: 114.5149, cameras: 54000 },
  { name: "Sydney", lat: -33.8688, lon: 151.2093, cameras: 60000 },
  { name: "St. Petersburg", lat: 59.9343, lon: 30.3351, cameras: 56300 },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437, cameras: 34959 },
  { name: "Lanzhou", lat: 36.0611, lon: 103.8343, cameras: 25200 },
  { name: "Xinbei (New Taipei City)", lat: 25.0172, lon: 121.4625, cameras: 35000 },
  { name: "Seoul", lat: 37.5665, lon: 126.9780, cameras: 77564 },
  { name: "Bangkok", lat: 13.7563, lon: 100.5018, cameras: 77885 },
  { name: "Hong Kong", lat: 22.3193, lon: 114.1694, cameras: 53971 },
  { name: "Istanbul", lat: 41.0082, lon: 28.9784, cameras: 109000 },
  { name: "New York", lat: 40.7128, lon: -74.0060, cameras: 58190 },
  { name: "Berlin", lat: 52.52, lon: 13.4050, cameras: 22289 },
  { name: "Guiyang", lat: 26.6512, lon: 106.6302, cameras: 20000 },
  { name: "Dalian", lat: 38.9140, lon: 121.6147, cameras: 32000 },
  { name: "Xian", lat: 34.3416, lon: 108.9398, cameras: 45000 },
  { name: "Puebla", lat: 19.0414, lon: -98.2063, cameras: 17440 },
  { name: "Madrid", lat: 40.4168, lon: -3.7038, cameras: 34000 },
  { name: "Guadalajara", lat: 20.6597, lon: -103.3496, cameras: 25672 },
  { name: "Lucknow", lat: 26.8467, lon: 80.9462, cameras: 16800 },
  { name: "Ho Chi Minh City", lat: 10.8231, lon: 106.6297, cameras: 37813 },
  { name: "Mexico City", lat: 19.4326, lon: -99.1332, cameras: 87000 },
  { name: "Paris", lat: 48.8566, lon: 2.3522, cameras: 42539 },
  { name: "Athens", lat: 37.9838, lon: 23.7275, cameras: 10847 },
  { name: "Fuzhou", lat: 26.0745, lon: 119.2965, cameras: 12800 },
  { name: "Mumbai", lat: 19.0760, lon: 72.8777, cameras: 68988 },
  { name: "Toronto", lat: 43.65107, lon: -79.347015, cameras: 19276 },
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473, cameras: 16470 },
  { name: "Milan", lat: 45.4642, lon: 9.1900, cameras: 8304 },
  { name: "Pune", lat: 18.5204, lon: 73.8567, cameras: 17320 },
  { name: "Cairo", lat: 30.0444, lon: 31.2357, cameras: 46552 },
  { name: "Melbourne", lat: -37.8136, lon: 144.9631, cameras: 10995 },
  { name: "Buenos Aires", lat: -34.6037, lon: -58.3816, cameras: 24743 },
{ name: "Osaka", lat: 34.6937, lon: 135.5023, cameras: 30000 },
{ name: "Kolkata", lat: 22.5726, lon: 88.3639, cameras: 22316 },
{ name: "Barcelona", lat: 41.3784, lon: 2.1925, cameras: 8330 },
{ name: "Rome", lat: 41.9028, lon: 12.4964, cameras: 5598 },
{ name: "Kano", lat: 12.0022, lon: 8.5919, cameras: 5000 },
{ name: "Salvador", lat: -12.9714, lon: -38.5014, cameras: 4510 },
{ name: "Tangshan Hebei", lat: 38.6116, lon: 118.1807, cameras: 4000 },
{ name: "Tokyo", lat: 35.6895, lon: 139.6917, cameras: 39504 },
{ name: "Montréal", lat: 45.5017, lon: -73.5673, cameras: 4402 },
{ name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729, cameras: 14000 },
{ name: "Tel Aviv", lat: 32.0853, lon: 34.7818, cameras: 4291 },
{ name: "São Paulo", lat: -23.5505, lon: -46.6333, cameras: 22175 },
{ name: "Hanoi", lat: 21.0285, lon: 105.8542, cameras: 4400 },
{ name: "Kampala", lat: 0.3136, lon: 32.5818, cameras: 2833 },
{ name: "Monterrey", lat: 25.6866, lon: -100.3161, cameras: 4000 },
{ name: "Brasilia", lat: -15.7801, lon: -47.9292, cameras: 3726 },
{ name: "Lahore", lat: 31.5497, lon: 74.3436, cameras: 10000 },
{ name: "Ahmedabad", lat: 23.0225, lon: 72.5714, cameras: 6281 },
{ name: "Casablanca", lat: 33.5731, lon: -7.5898, cameras: 2850 },
{ name: "Fortaleza", lat: -3.7172, lon: -38.5437, cameras: 3033 },
{ name: "Dhaka", lat: 23.8103, lon: 90.4125, cameras: 16000 },
{ name: "Jakarta", lat: -6.2088, lon: 106.8456, cameras: 8013 },
{ name: "Bogotá", lat: 4.7110, lon: -74.0721, cameras: 7881 },
{ name: "Curitiba", lat: -25.4294, lon: -49.2712, cameras: 2585 },
{ name: "Lima", lat: -12.0464, lon: -77.0428, cameras: 7547 },
{ name: "Khartoum", lat: 15.5007, lon: 32.5599, cameras: 4010 },
{ name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869, cameras: 5000 },
{ name: "Medellín", lat: 6.2442, lon: -75.5812, cameras: 2430 },
{ name: "Porto Alegre", lat: -30.0346, lon: -51.2177, cameras: 2503 },
{ name: "Cape Town", lat: -33.9249, lon: 18.4241, cameras: 2765 },
{ name: "Yangon", lat: 16.8409, lon: 96.1735, cameras: 2995 },
{ name: "Recife", lat: -8.0476, lon: -34.8770, cameras: 2080 },
{ name: "Santiago", lat: -33.4489, lon: -70.6693, cameras: 3000 },
{ name: "Surat", lat: 21.1702, lon: 72.8311, cameras: 3180 },
{ name: "Nairobi", lat: -1.2867, lon: 36.8172, cameras: 2000 },
{ name: "Santo Domingo", lat: 18.7357, lon: -70.1627, cameras: 1369 },
{ name: "Ekurhuleni", lat: -26.2980, lon: 28.2410, cameras: 1500 },
{ name: "Belo Horizonte", lat: -19.9191, lon: -43.9386, cameras: 2145 },
{ name: "Antananarivo", lat: -18.8792, lon: 47.5079, cameras: 1000 },
{ name: "Ankara", lat: 39.9334, lon: 32.8597, cameras: 1400 },
{ name: "Jaipur", lat: 26.9124, lon: 75.7873, cameras: 1000 },
{ name: "Busan", lat: 35.1796, lon: 129.0756, cameras: 780 },
{ name: "Tehran", lat: 35.6892, lon: 51.3890, cameras: 2083 },
{ name: "Manila", lat: 14.5995, lon: 120.9842, cameras: 3086 },
{ name: "Chittagong", lat: 22.3569, lon: 91.7832, cameras: 1052 },
{ name: "Asuncion", lat: -25.2637, lon: -57.5759, cameras: 668 },
{ name: "Fukuoka", lat: 33.5897, lon: 130.4017, cameras: 1076 },
{ name: "Campinas", lat: -23.1896, lon: -46.8978, cameras: 640 },
{ name: "Abidjan", lat: 5.3581, lon: -4.0083, cameras: 1024 },
{ name: "Kochi", lat: 9.9312, lon: 76.2673, cameras: 582 },
{ name: "Mashhad", lat: 36.3060, lon: 59.6065, cameras: 584 },
{ name: "Durban", lat: -29.8587, lon: 31.0218, cameras: 528 },
{ name: "Dakar", lat: 14.6928, lon: -17.4467, cameras: 473 },
{ name: "Thrissur", lat: 10.5270, lon: 76.2145, cameras: 269 },
{ name: "Luanda", lat: -8.8390, lon: 13.2894, cameras: 700 },
{ name: "Bangalore", lat: 12.9716, lon: 77.5946, cameras: 917 },
{ name: "Addis Ababa", lat: 9.0300, lon: 38.7469, cameras: 140 },
{ name: "Kabul", lat: 34.5553, lon: 69.2075, cameras: 108 },
{ name: "Alexandria", lat: 31.2156, lon: 29.9553, cameras: 122 },
{ name: "Kozhikode", lat: 11.2588, lon: 75.7804, cameras: 76 },
{ name: "Riyadh", lat: 24.7136, lon: 46.6753, cameras: 150 },
{ name: "Abuja", lat: 9.0575, lon: 7.4951, cameras: 40 },
{ name: "Bekasi", lat: -6.2342, lon: 106.9895, cameras: 29 },
{ name: "Ibadan", lat: 7.3775, lon: 3.8957, cameras: 10 },
{ name: "Lagos", lat: 6.5244, lon: 3.3792, cameras: 0 },
];


// Constants
const MAP_BOUNDS = {
  minLat: -60,
  maxLat: 80,
  minLon: -180,
  maxLon: 180
};

// Globals
let countryLabelsVisible = {}; // To track which country labels are visible
let hoveredCountry = null; // To track which country is being hovered over
let hoveredCity = null; // To track which city is being hovered over
let canvasContainer;
let centerHorz, centerVert;

// Zoom and pan variables
let zoomLevel = 1.0;
let maxZoom = 20.0;
let minZoom = 0.5;
let centerLon = 0; // Center longitude of the view
let centerLat = 20; // Center latitude of the view
let isDragging = false;
let lastMouseX, lastMouseY;


function resizeScreen() {
  centerHorz = canvasContainer.width() / 2;
  centerVert = canvasContainer.height() / 2;
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  redraw(); // Redraw everything based on new size
}

function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  
  // resize canvas if the page is resized
  $(window).resize(function() {
    resizeScreen();
  });
  
  // Initialize country labels to be hidden
  countries.forEach(country => {
    countryLabelsVisible[country.name] = false;
  });
  
  noLoop(); // Only redraw when interaction happens
  resizeScreen();
}

// Function to get the visible map boundaries based on zoom and center
function getVisibleMapBounds() {
  // Calculate the visible longitude range
  const lonRange = MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon;
  const visibleLonRange = lonRange / zoomLevel;
  const halfVisibleLonRange = visibleLonRange / 2;
  
  // Calculate the visible latitude range
  // Adjust for aspect ratio to prevent stretching
  const aspectRatio = width / height;
  const latRange = MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat;
  const visibleLatRange = latRange / zoomLevel / aspectRatio;
  const halfVisibleLatRange = visibleLatRange / 2;
  
  return {
    minLon: centerLon - halfVisibleLonRange,
    maxLon: centerLon + halfVisibleLonRange,
    minLat: centerLat - halfVisibleLatRange,
    maxLat: centerLat + halfVisibleLatRange
  };
}

function draw() {
  background(30); // Dark background to set the dystopic feel
  
  // Get the current visible bounds
  const visibleBounds = getVisibleMapBounds();
  
  // Draw dark grid lines
  drawMapGrid(visibleBounds);
  
  // Plot the cities with circle sizes based on camera count
  cities.forEach(city => {
    // Skip cities outside the visible bounds (with some margin)
    if (city.lon < visibleBounds.minLon - 10 || city.lon > visibleBounds.maxLon + 10 ||
        city.lat < visibleBounds.minLat - 5 || city.lat > visibleBounds.maxLat + 5) {
      return;
    }
    
    const x = map(city.lon, visibleBounds.minLon, visibleBounds.maxLon, 0, width);
    const y = map(city.lat, visibleBounds.minLat, visibleBounds.maxLat, height, 0);

    // Determine circle size based on the number of cameras
    let baseCircleSize;
    let colorFill;
    
    if (city.cameras <= 1000) {
      baseCircleSize = 18; // Small size
      colorFill = color(255, 255, 0, 80); // Yellow
    } else if (city.cameras <= 5000) {
      baseCircleSize = 27; // Medium size
      colorFill = color(255, 165, 0, 80); // Orange
    } else {
      baseCircleSize = 36; // Large size
      colorFill = color(255, 0, 0, 80); // Red
    }
    
    // Calculate a good circle size - we want to keep the circles relatively
    // consistent in size regardless of zoom, but slightly smaller at higher zooms
    const circleSize = baseCircleSize * Math.sqrt(1 / zoomLevel) * 1.5;

    // Draw the circle for each city
    fill(colorFill);
    noStroke();
    ellipse(x, y, circleSize, circleSize);
  });

  // Plot the countries
  countries.forEach(country => {
    // Skip countries outside the visible bounds (with some margin)
    if (country.lon < visibleBounds.minLon - 10 || country.lon > visibleBounds.maxLon + 10 ||
        country.lat < visibleBounds.minLat - 5 || country.lat > visibleBounds.maxLat + 5) {
      return;
    }
    
    const x = map(country.lon, visibleBounds.minLon, visibleBounds.maxLon, 0, width);
    const y = map(country.lat, visibleBounds.minLat, visibleBounds.maxLat, height, 0);
    
    // Check if this is the hovered country
    const isHovered = hoveredCountry === country.name;
    
    // Calculate dot size that looks good at any zoom level
    const dotSize = 12 * Math.sqrt(1 / zoomLevel) * 1.5;
    const hoveredDotSize = 16 * Math.sqrt(1 / zoomLevel) * 1.5;
    
    // Color the country points (brighter if hovered)
    if (isHovered) {
      fill(255, 255, 255, 255);
      ellipse(x, y, hoveredDotSize, hoveredDotSize); // Slightly larger when hovered
    } else {
      fill(255, 255, 255, 255); // White
      ellipse(x, y, dotSize, dotSize); // Normal size
    }
    
    // Show the country name if the label is visible or if it's being hovered over
    if (countryLabelsVisible[country.name] || isHovered) {
      textSize(14 * Math.sqrt(1 / zoomLevel) * 1.2);
      textAlign(CENTER, CENTER);
      fill(255, 255, 255, 180); // Subtle white text
      text(country.name, x, y - 18 * Math.sqrt(1 / zoomLevel) * 1.5);
    }
  });

  // Display the popup box if a city is hovered over
  if (hoveredCity) {
    displayPopup(hoveredCity, visibleBounds);
  }
  
  // Display zoom level and coordinates
  fill(255);
  noStroke();
  textSize(16);
  textAlign(LEFT, BOTTOM);
  text(`Zoom: ${zoomLevel.toFixed(1)}x`, 10, height - 10);
  text(`Center: ${centerLon.toFixed(1)}°, ${centerLat.toFixed(1)}°`, 10, height - 30);
  
  // Display instructions
  textAlign(RIGHT, BOTTOM);
  textSize(12);
  text("Scroll to zoom, drag to pan, double-click to reset", width - 10, height - 10);
}

function displayPopup(city, visibleBounds) {
  const x = map(city.lon, visibleBounds.minLon, visibleBounds.maxLon, 0, width);
  const y = map(city.lat, visibleBounds.minLat, visibleBounds.maxLat, height, 0);
  
  const label = getCityLabel(city.cameras); // Get the label based on camera count
  const popupText = `${city.name}\nCameras: ${city.cameras}\n${label}`;
  
  // Set popup box style
  fill(50, 50, 50, 180); // Dark transparent background
  noStroke();
  rect(x + 15, y - 30, 150, 70, 5); // Rounded rectangle for popup

  fill(255); // White text
  textSize(16);
  textAlign(LEFT, TOP);
  text(popupText, x + 20, y - 25); // Draw the text inside the popup box
}

function getCityLabel(cameraCount) {
  if (cameraCount <= 1000) {
    return "SAFE ZONE";
  } else if (cameraCount <= 5000) {
    return "WATCH OUT";
  } else {
    return "NO ESCAPE";
  }
}

// Convert screen coordinates to geo coordinates
function screenToGeo(screenX, screenY) {
  const visibleBounds = getVisibleMapBounds();
  const lon = map(screenX, 0, width, visibleBounds.minLon, visibleBounds.maxLon);
  const lat = map(screenY, height, 0, visibleBounds.minLat, visibleBounds.maxLat);
  return { lon, lat };
}

function mousePressed() {
  // Start dragging
  if (mouseButton === LEFT) {
    isDragging = true;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    
    // Check for clicks on countries
    const visibleBounds = getVisibleMapBounds();
    const geoPos = screenToGeo(mouseX, mouseY);
    
    // Check if the mouse is over any country when clicked
    countries.forEach(country => {
      const x = map(country.lon, visibleBounds.minLon, visibleBounds.maxLon, 0, width);
      const y = map(country.lat, visibleBounds.minLat, visibleBounds.maxLat, height, 0);
      
      // Calculate hit radius based on zoom level
      const hitRadius = 12 * Math.sqrt(1 / zoomLevel) * 1.5;
      
      if (dist(mouseX, mouseY, x, y) < hitRadius) {
        countryLabelsVisible[country.name] = !countryLabelsVisible[country.name];
        redraw();
      }
    });
  }
}

function mouseReleased() {
  // Stop dragging
  isDragging = false;
}

function mouseDragged() {
  if (isDragging) {
    // Calculate the distance moved in screen pixels
    const dx = mouseX - lastMouseX;
    const dy = mouseY - lastMouseY;
    
    // Get the visible bounds
    const visibleBounds = getVisibleMapBounds();
    
    // Convert pixel movement to longitude/latitude changes
    // Negative because dragging right should move the map left
    const lonChange = -map(dx, 0, width, 0, visibleBounds.maxLon - visibleBounds.minLon);
    const latChange = map(dy, 0, height, 0, visibleBounds.maxLat - visibleBounds.minLat);
    
    // Update the center coordinates
    centerLon += lonChange;
    centerLat += latChange;
    
    // Keep longitude in valid range (-180 to 180)
    if (centerLon < -180) centerLon += 360;
    if (centerLon > 180) centerLon -= 360;
    
    // Constrain latitude to valid range
    centerLat = constrain(centerLat, MAP_BOUNDS.minLat + 1, MAP_BOUNDS.maxLat - 1);
    
    // Update the last mouse position
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    
    // Redraw the canvas
    redraw();
    return false; // Prevent default behavior
  }
}

function mouseMoved() {
  if (isDragging) return; // Skip hover detection while dragging
  
  let isHovering = false;
  let previousHoveredCity = hoveredCity;
  let previousHoveredCountry = hoveredCountry;
  
  // Reset hover states
  hoveredCity = null;
  hoveredCountry = null;
  
  // Get the visible bounds
  const visibleBounds = getVisibleMapBounds();
  
  // Check if mouse is over any city
  cities.forEach(city => {
    const x = map(city.lon, visibleBounds.minLon, visibleBounds.maxLon, 0, width);
    const y = map(city.lat, visibleBounds.minLat, visibleBounds.maxLat, height, 0);
    
    // Calculate hit radius based on zoom level and city size
    let baseRadius;
    if (city.cameras <= 1000) {
      baseRadius = 18;
    } else if (city.cameras <= 5000) {
      baseRadius = 27;
    } else {
      baseRadius = 36;
    }
    
    const hitRadius = (baseRadius/2) * Math.sqrt(1 / zoomLevel) * 1.5;
    
    if (dist(mouseX, mouseY, x, y) < hitRadius) {
      cursor(HAND);
      isHovering = true;
      hoveredCity = city; // Set the hovered city
    }
  });
  
  // Check if mouse is over any country (if not already hovering over a city)
  if (!isHovering) {
    countries.forEach(country => {
      const x = map(country.lon, visibleBounds.minLon, visibleBounds.maxLon, 0, width);
      const y = map(country.lat, visibleBounds.minLat, visibleBounds.maxLat, height, 0);
      
      // Calculate hit radius based on zoom level
      const hitRadius = 12 * Math.sqrt(1 / zoomLevel) * 1.5;
      
      if (dist(mouseX, mouseY, x, y) < hitRadius) {
        cursor(HAND);
        isHovering = true;
        hoveredCountry = country.name; // Set the hovered country
      }
    });
  }
  
  // Reset cursor if not hovering over anything
  if (!isHovering) {
    cursor(ARROW);
  }
  
  // Only redraw if the hover state changed
  if (previousHoveredCity !== hoveredCity || previousHoveredCountry !== hoveredCountry) {
    redraw();
  }
}

// Mouse wheel event for zooming
function mouseWheel(event) {
  // Only handle the wheel event if the mouse is over the canvas
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    // Calculate the zoom factor (0.1 per wheel tick is a good scale)
    const zoomFactor = 1.1;
    let newZoom;
    
    if (event.delta > 0) {
      // Zoom out
      newZoom = zoomLevel / zoomFactor;
    } else {
      // Zoom in
      newZoom = zoomLevel * zoomFactor;
    }
    
    // Constrain zoom level
    newZoom = constrain(newZoom, minZoom, maxZoom);
    
    // Only proceed if zoom level actually changed
    if (newZoom !== zoomLevel) {
      // Get geo coordinates of the mouse position
      const mouseGeo = screenToGeo(mouseX, mouseY);
      
      // Calculate how much to adjust the center
      // This is what makes the map zoom toward the mouse position
      if (event.delta < 0) { // Zooming in
        // Move center slightly toward mouse position when zooming in
        const moveRatio = 0.2; // How much to move toward the mouse (0-1)
        centerLon = centerLon + (mouseGeo.lon - centerLon) * moveRatio;
        centerLat = centerLat + (mouseGeo.lat - centerLat) * moveRatio;
      }
      
      // Update the zoom level
      zoomLevel = newZoom;
      
      // Redraw the canvas
      redraw();
    }
    
    // Prevent default scrolling behavior only when mouse is over the canvas
    return false;
  }
  
  // Allow default scrolling behavior when mouse is outside the canvas
  return true;
}

function drawMapGrid(bounds) {
  stroke(60, 60, 60, 150); // Dark grid lines with transparency
  strokeWeight(1);
  
  // Calculate the step size based on zoom level for dynamic grid density
  let lonStep = 20;
  let latStep = 10;
  
  // Increase grid density when zoomed in
  if (zoomLevel > 2) {
    lonStep = 10;
    latStep = 5;
  }
  if (zoomLevel > 5) {
    lonStep = 5;
    latStep = 2;
  }
  if (zoomLevel > 10) {
    lonStep = 1;
    latStep = 1;
  }
  
  // Ensure we're drawing grid lines in a sensible range based on the visible bounds
  // Round to nearest step to ensure grid alignment
  const startLon = Math.floor(bounds.minLon / lonStep) * lonStep;
  const endLon = Math.ceil(bounds.maxLon / lonStep) * lonStep;
  const startLat = Math.floor(bounds.minLat / latStep) * latStep;
  const endLat = Math.ceil(bounds.maxLat / latStep) * latStep;
  
  // Draw longitude lines
  for (let lon = startLon; lon <= endLon; lon += lonStep) {
    const x = map(lon, bounds.minLon, bounds.maxLon, 0, width);
    line(x, 0, x, height);
    
    // Add longitude labels at the bottom
    if (zoomLevel > 2) {
      fill(200);
      noStroke();
      textSize(10);
      textAlign(CENTER, TOP);
      text(`${lon}°`, x, height - 15);
    }
  }
  
  // Draw latitude lines
  for (let lat = startLat; lat <= endLat; lat += latStep) {
    const y = map(lat, bounds.minLat, bounds.maxLat, height, 0);
    line(0, y, width, y);
    
    // Add latitude labels on the right
    if (zoomLevel > 2) {
      fill(200);
      noStroke();
      textSize(10);
      textAlign(RIGHT, CENTER);
      text(`${lat}°`, width - 10, y);
    }
  }
}

// Double-click to reset zoom and pan
function doubleClicked() {
  zoomLevel = 1.0;
  centerLon = 0;
  centerLat = 20;
  redraw();
  return false;
}