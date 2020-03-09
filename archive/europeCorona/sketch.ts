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

  angle = angle + 0.01;
  translate(windowWidth / 2, windowHeight / 2);

  for (var i = 0; i < squares; i++) {
    Shapes.drawNestedStar(squares, colors[i], i, i);
  }
}
