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
  background(51);
  translate(windowWidth / 2, windowHeight / 2);

  angle = angle + 0.01;
  rotate(angle / 2);

  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(squares, colors, i, i);
  }

  translate(300, 400);
  angle = angle + 12.05;
  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(squares, colors, i * 2, i * 2);
  }
}
