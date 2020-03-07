const WIDTH = 700
const HEIGHT = 500
const FRAME_RATE = 30
const N_PARTICLES = 5
const RADIUS = 50
const BKG_COLOR = 0
let particles = []

class Particle {
  constructor () {
    this.x = random(0, WIDTH)
    this.y = random(0, HEIGHT)
    this.r = RADIUS
    this.xSpeed = random(-2, 2)
    this.ySpeed = random(-1, 1.5)
  }

  createParticle () {
    strokeWeight(5)
    stroke(255)
    circle(this.x, this.y, this.r)
    fill(183, 0, 217)
  }

  moveParticle () {
    if (this.x < 0 || this.x > WIDTH) this.xSpeed *= -1
    if (this.y < 0 || this.y > HEIGHT) this.ySpeed *= -1
    this.x += this.xSpeed
    this.y += this.ySpeed
  }

  checkPos (idx) {
    particles.forEach((element, i) => {
      if (idx === i) return
      let dis = dist(particles[idx].x, particles[idx].y, element.x, element.y)
      if (dis - RADIUS <= 0) {
        console.log('collision')
      }
    })
  }
}

function setup () {
  createCanvas(WIDTH, HEIGHT)
  for (let i = 0; i < N_PARTICLES; i++) {
    particles.push(new Particle())
  }
  background(BKG_COLOR)
  frameRate(FRAME_RATE)
}

function draw () {
  background(BKG_COLOR)
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle()
    particles[i].moveParticle()
    particles[i].checkPos(i)
  }
}
