document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvasBox"),
    ctx = canvas.getContext("2d");

  var rangeValue = document.getElementById("rangeValue");
  let color = "#000";
  let brushWidth = 3;
  let isDrawing = false;

  window.addEventListener("load", () => {
    resizeCanvas();
  });

  window.addEventListener("resize", () => {
    resizeCanvas();
  });

  function resizeCanvas() {
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
  }

  function drawing(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.lineWidth = brushWidth;
  }

  function startDrawing() {
    isDrawing = true;
    ctx.beginPath();
    ctx.strokeStyle = color;
  }

  function brushWidthChange() {
    brushWidth = RangeBtn.value;
    rangeValue.innerText = brushWidth;
  }

  function setColor(newColor) {
    color = newColor;
    console.log("hi", newColor, "im here");
  }

  function colorSelect1() {
    color = colorSelect.value;
  }

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", drawing);
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  canvas.addEventListener("mouseout", () => {
    isDrawing = false;
  });

  // Brush color buttons
  document.getElementById("colorBlack").addEventListener("click", function () {
    setColor("black");
  });

  document.getElementById("colorRed").addEventListener("click", function () {
    setColor("red");
  });

  document.getElementById("colorOrange").addEventListener("click", function () {
    setColor("orange");
  });

  document.getElementById("colorBlue").addEventListener("click", function () {
    setColor("blue");
  });

  document.getElementById("colorBrown").addEventListener("click", function () {
    setColor("brown");
  });

  document.getElementById("colorGreen").addEventListener("click", function () {
    setColor("green");
  });

  document.getElementById("colorYellow").addEventListener("click", function () {
    setColor("yellow");
  });

  document.getElementById("colorWhite").addEventListener("click", function () {
    setColor("white");
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  document.getElementById("saveBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "drawing.jpg";
    link.click();
  });
  // Brush size range input
  const RangeBtn = document.getElementById("Range");
  RangeBtn.addEventListener("input", brushWidthChange);

  // Color select input
  const colorSelect = document.getElementById("colorSetBtn");
  colorSelect.addEventListener("change", colorSelect1);
});
