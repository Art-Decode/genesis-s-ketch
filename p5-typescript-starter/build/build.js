var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.getColorVector = function (c) {
        return createVector(red(c), green(c), blue(c));
    };
    ColorHelper.rainbowColorBase = function () {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    };
    ColorHelper.getColorsArray = function (total, baseColorArray) {
        var _this = this;
        if (baseColorArray === void 0) { baseColorArray = null; }
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(function (x) { return _this.getColorVector(x); });
        ;
        var colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    };
    ColorHelper.getColorByPercentage = function (firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    };
    return ColorHelper;
}());
var Shapes = (function () {
    function Shapes() {
    }
    Shapes.star = function (x, y, radius1, radius2, npoints) {
        var angle = TWO_PI / npoints;
        var halfAngle = angle / 2.0;
        var points = new Array();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = x + cos(a) * radius2;
            var sy = y + sin(a) * radius2;
            points.push(createVector(sx, sy));
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            points.push(createVector(sx, sy));
        }
        return points;
    };
    Shapes.drawNestedStar = function (squares, colors, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        for (var i = 0; i < squares; i++) {
            strokeWeight(2);
            stroke(colors[i]);
            noFill();
            angle = angle + 0.01;
            rotate(angle / 2);
            beginShape();
            var points = Shapes.star(x, y, 10 * i, 25 * i, 7);
            for (var x = 0; x < points.length; x++) {
                var v = points[x];
                vertex(v.x, v.y);
            }
            endShape(CLOSE);
        }
    };
    return Shapes;
}());
var angle = 0;
var squares = 10;
var colors;
function setup() {
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
        Shapes.drawNestedStar(10, colors, i, i);
    }
    translate(300, 400);
    angle = angle + 12.05;
    for (var i = 0; i < squares; i++) {
        Shapes.drawNestedStar(10, colors, i * 2, i * 2);
    }
    for (var i = 0; i < squares; i++) {
        translate(300, 400);
        Shapes.drawNestedStar(10, colors, i / 2, i / 2);
    }
}
//# sourceMappingURL=build.js.map