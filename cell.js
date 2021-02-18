const dangerZone = 23;

function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.robot = false;

  if (sumCoordinates(x, y) >= dangerZone) {
    this.cellStatus = false;
  } else {
    this.cellStatus = true;
  }
}

function sumCoordinates(i, j) {
  i = [...(i + "")].map((n) => +n).reduce((a, b) => a + b);
  j = [...(j + "")].map((n) => +n).reduce((a, b) => a + b);
  console.log(i);
  return i + j;
}

Cell.prototype.maxReachArea = function () {
  var countReachable = 0;
  if (this.cellStatus) {
    return -1;
  }
};

Cell.prototype.show = function () {
  // stroke("white");
  noStroke();
  noFill();
  rect(this.x, this.y, this.w, this.w);
  // fill(0);
  // textAlign(CENTER);
  // text(this.x);

  if (this.cellStatus === true) {
    // stroke("green");
    fill(120);
    rect(this.x, this.y, this.w, this.w);
    if (this.robot) {
      fill("green");
      rect(this.x, this.y, this.w, this.w);
      // ellipse(this.x + this.w / 2, this.y + this.w / 2, this.w + 0.5);
    }

    // fillText("x", this.x / 2, this.y / 2);
  }
};

Cell.prototype.contains = function (x, y) {
  return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w;
};

Cell.prototype.reveal = function () {
  this.robot = true;
};
