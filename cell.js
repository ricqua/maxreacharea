const dangerZone = 23;

function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w; //20

  //Upgrade to actual .map.reduce
  if (sumCoordinates(x, y) <= dangerZone) {
    this.mine = true;
    // console.log(true);
  } else {
    this.mine = false;
    // console.log(false);
  }
}

// sumCoordinates(this.x, this.y);

function sumCoordinates(i, j) {
  i = [...(i + "")].map((n) => +n).reduce((a, b) => a + b);
  j = [...(j + "")].map((n) => +n).reduce((a, b) => a + b);
  console.log(i);
  return i + j;
}

Cell.prototype.show = function () {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);

  if (this.mine) {
    fill("green");
    rect(this.x, this.y, this.w, this.w);
  }
};
