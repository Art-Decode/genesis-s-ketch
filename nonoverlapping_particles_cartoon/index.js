const WIDTH = 700;
const HEIGHT = 500;
const MAX_PARTICLES_RADIUS = 50;
let area = WIDTH * HEIGHT;
let s;
const BKG_COLOR = 0;
let particles = [];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Particle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    if (getRndInteger(0, 100) > 50) {
      stroke(
        getRndInteger(0, 255),
        getRndInteger(0, 255),
        getRndInteger(0, 255)
      );
      strokeWeight(random(0, 1));
      s.scribbleEllipse(this.x, this.y, this.r, this.r);
      fill(random(0, 255), random(0, 255), random(0, 255));
    } else {
      stroke(
        getRndInteger(0, 255),
        getRndInteger(0, 255),
        getRndInteger(0, 255)
      );
      strokeWeight(random(0, 1));
      s.scribbleRect(this.x, this.y, this.r, this.r);
    }
  }
}

function setup() {
  s = new Scribble();

  createCanvas(WIDTH, HEIGHT);
  background(BKG_COLOR);
  noLoop();
}

function draw() {
  background(BKG_COLOR);

  while (area > MAX_PARTICLES_RADIUS) {
    let x = random(0, WIDTH);
    let y = random(0, HEIGHT);
    let r = random(1, MAX_PARTICLES_RADIUS);
    let collision = false;
    for (let i in particles) {
      let d = dist(x, y, particles[i].x, particles[i].y);
      if (d - r - particles[i].r <= 0) collision = true;
    }
    if (!collision) {
      particles.push(new Particle(x, y, r));
      area -= r ** 2 * PI * 1.5;
    }
  }
}
