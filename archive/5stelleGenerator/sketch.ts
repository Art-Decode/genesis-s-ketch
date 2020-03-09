let angle = 0;
let squares = 10;
let colors: p5.Color[];
function setup() {
  frameRate(35);
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colors = ColorHelper.getColorsArray(squares);
}

function draw() {
  background(255);

  translate(windowWidth / 2, windowHeight / 2);
  angle = angle + 0.001;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(10, colors[i], i, i);
  }
  angle = angle + 0.001;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(10, colors[i], i, i);
  }
  angle = angle + 0.001;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(10, colors[i], i, i);
  }
  angle = angle + 0.001;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(10, colors[i], i, i);
  }
}
