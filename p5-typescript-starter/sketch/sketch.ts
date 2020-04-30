let angle = 0;
let squares = 10;
let colors: p5.Color[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colors = ColorHelper.getColorsArray(squares);
}

function draw() {
  background(0);

  translate(windowWidth / 2, windowHeight / 2);

  for (var size = 0; size < squares; size++) {
    Shapes.drawNestedStar(size + 12, colors[size], size, size);
  }
  for (var size = 0; size < squares; size++) {
    Shapes.drawNestedStar(size + 12, colors[size], size, size);
  }
}
