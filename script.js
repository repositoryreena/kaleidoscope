const canvas = document.getElementById("kaleidoscopeCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Center of the kaleidoscope
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Number of sections in the kaleidoscope
const numSections = 12;

// Function to draw a kaleidoscope section
function drawKaleidoscopeSection(x, y) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((Math.PI / 180) * (360 / numSections));
    ctx.translate(-centerX, -centerY);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

// Function to handle mouse move events
function onMouseMove(event) {
    const x = event.clientX;
    const y = event.clientY;

    for (let i = 0; i < numSections; i++) {
        drawKaleidoscopeSection(x, y);
    }
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listeners
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("click", clearCanvas);

// Initial clear to start with a clean canvas
clearCanvas();
