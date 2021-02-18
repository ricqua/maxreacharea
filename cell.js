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
  var total = 0;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var neighbor = grid[this.i + i][this.j + j];
      if (!neighbor.cellStatus) {
        total++;
      }
    }
  }
  return total;
};

Cell.prototype.contains = function (x, y) {
  return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w;
};

Cell.prototype.reveal = function () {
  this.robot = true;
  if (true) {
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
        if (!neighbor.dangerZone && !neighbor.robot) {
          neighbor.reveal();
        }
      }
    }
  }
};
