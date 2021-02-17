const dangerZone = 23;

function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;

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

Cell.prototype.show = function () {
  // stroke("white");
  noStroke();
  noFill();
  rect(this.x, this.y, this.w, this.w);

  if (this.cellStatus === true) {
    // stroke("green");
    fill("green");
    rect(this.x, this.y, this.w, this.w);
  }
};
