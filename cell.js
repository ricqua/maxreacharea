const dangerZone = 23;

function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.explored = true;
  this.robot = false;
  this.reachable = false;

  if (sumCoordinates(this.x, this.y) >= dangerZone) {
    this.mine = true;
  } else {
    this.mine = false;
  }
}

function sumCoordinates(i, j) {
  i = [...(i + "")].map((n) => +n).reduce((a, b) => a + b);
  j = [...(j + "")].map((n) => +n).reduce((a, b) => a + b);
  // console.log(i);
  return i + j;
}

Cell.prototype.maxReachArea = function () {
  var countReachable = 0;
  if (this.cellStatus) {
    return -1;
  }
};

Cell.prototype.show = function () {
  noStroke();
  noFill();
  rect(this.x, this.y, this.w, this.w);

  if (this.explored) {
    fill(200);
    rect(this.x, this.y, this.w, this.w);
    if (!this.mine) {
      fill(150);
      rect(this.x, this.y, this.w, this.w);
      if (this.robot) {
        fill("blue");
        rect(this.x, this.y, this.w, this.w);
        if (this.reachable) {
          fill("green");
          rect(this.x, this.y, this.w, this.w);
        }
      }
    }
  }
};

Cell.prototype.contains = function (x, y) {
  return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w;
};

Cell.prototype.reveal = function () {
  this.robot = true;
};
