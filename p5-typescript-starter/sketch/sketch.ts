let angle = 0;
let squares = 22;
let colors: p5.Color[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colors = ColorHelper.getColorsArray(squares);
}

function draw() {
  background(0);

  translate(windowWidth / 2, windowHeight / 2);
  angle = angle + 0.0000001;
  rotate(angle);
  for (var size = 0; size < squares; size++) {
    Shapes.drawNestedStar(squares, colors[size], size, size);
  }
}
