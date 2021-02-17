function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;

  if (this.x / w + this.y / w < 24) {
    this.mine = true;
  } else {
    this.mine = false;
  }
}

Cell.prototype.show = function () {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);

  if (this.mine) {
    fill("red");
    rect(this.x, this.y, this.w, this.w);
    // ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
  }
};
