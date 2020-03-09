class Shapes {
  static star(
    x: number,
    y: number,
    radius1: number,
    radius2: number,
    npoints: number
  ): p5.Vector[] {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;

    const points = new Array<p5.Vector>();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      points.push(createVector(sx, sy));
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      points.push(createVector(sx, sy));
    }

    return points;
  }

  static drawNestedStar(squares: number, colors: any, x = 0, y = 0) {
    for (var i = 0; i < squares; i++) {
      strokeWeight(2);
      stroke(colors);
      noFill();

      angle = angle + 0.01;
      rotate(angle);

      beginShape();
      let points = Shapes.star(x, y, 10 * i, 25 * i, 7);

      for (var x = 0; x < points.length; x++) {
        var v = points[x];
        vertex(v.x, v.y);
      }
      endShape(CLOSE);

      beginShape();
      let points2 = Shapes.star(500, y, 10 * i, 25 * i, 7);

      for (var x = 0; x < points2.length; x++) {
        var v = points2[x];
        vertex(v.x, v.y);
      }
      endShape(CLOSE);
    }
  }
}
