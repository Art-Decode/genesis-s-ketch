let angle = 0;
let squares = 10;
let colors: p5.Color[];
function setup() {
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
    Shapes.drawNestedStar(9, colors[i], i, i);
  }
  angle = angle + 0.001;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(8, colors[i], i, i);
  }
  angle = angle + 0.004;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(7, colors[i], i, i);
  }

  angle = angle + 0.004;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(6, colors[i], i, i);
  }
  angle = angle + 0.004;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(5, colors[i], i, i);
  }
  angle = angle + 0.004;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(4, colors[i], i, i);
  }

  angle = angle + 0.004;
  rotate(angle);
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(3, colors[i], i, i);
  }
}
