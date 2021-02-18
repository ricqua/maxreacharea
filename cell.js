const dangerZone = 17;

function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.explored = true;
  // this.robot = false;
  this.neighborCount = 0;
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
      // textAlign(CENTER);
      // textSize(3);
      // fill(0);
      // text(this.neighborCount, this.x + this.w / 2, this.y + this.w - 1);
      if (this.reachable) {
        fill("green");
        rect(this.x, this.y, this.w, this.w);
      }
    }
  }
};

Cell.prototype.contains = function (x, y) {
  return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w;
};

Cell.prototype.countMines = function () {
  if (this.mine) {
    this.neighborCount = -1;
    return;
  }
  var total = 0;

  for (var xoff = -1; xoff <= 1; xoff++) {
    for (var yoff = -1; yoff <= 1; yoff++) {
      var i = this.i + xoff;
      var j = this.j + yoff;
      if (i > -1 && i < cols && j > -1 && j < rows) {
        var neighbor = grid[i][j];
        if (neighbor.mine) {
          total++;
        }
      }
    }
    this.neighborCount = total;
  }
  // this.reachable++;
  // console.log(this.reachable);
};

Cell.prototype.reveal = function () {
  this.reachable = true;
  if (this.neighborCount < 8) {
    this.floodFill();
  }
};

Cell.prototype.floodFill = function () {
  for (var xoff = -1; xoff <= 1; xoff++) {
    for (var yoff = -1; yoff <= 1; yoff++) {
      var i = this.i + xoff;
      var j = this.j + yoff;
      if (i > -1 && i < cols && j > -1 && j < rows) {
        var neighbor = grid[i][j];
        if (!neighbor.mine && !neighbor.reachable) {
          neighbor.reveal();
        }
      }
    }
  }
};
