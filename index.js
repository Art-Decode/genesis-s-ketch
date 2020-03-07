function setup () {
  createCanvas(500, 500)
  background(0)
  colorMode(HSB, 360, 100, 100)
  noStroke()
  ellipseMode(RADIUS)
  frameRate(1)
}

function draw () {
  background(0)

  let nObj = random(1, 50)
  for (let x = 0; x <= nObj; x++) {
    drawGradient(random(0, width), random(0, height))
  }
}

function drawGradient (x, y) {
  let dim = random(1, width)
  let radius = dim / 2
  let h = random(0, 360)
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90)
    ellipse(x, y, r, r)
    h = (h + 1) % 360
  }
}
