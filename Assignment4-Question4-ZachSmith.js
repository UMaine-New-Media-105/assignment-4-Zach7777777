let squareX = 100;
let squareY = 100;
let lines = ["lines0", "lines1", "lines2", "lines3", "lines4"];
function setup() {
  createCanvas(1000, 1000);
  tilesPerRow = lines.legnth;
  tileWidth = width / tilesPerRow;
  tileCol = 5;
  colHeight = height / tileCol;
}

function draw() {
  background(220);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      addSquare(100 * i, 100 * j);
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let = steakLines = lines[j % 5];
      stroke("paleturquoise");
      addLines1(steakLines, 100 * i, 100 * j);
    }
  }
}
function addSquare(x, y) {
  push();
  translate(x, y);
  fill("darkslategrey");
  strokeWeight(10);
  rect(0, 0, squareX, squareY);
  pop();
}
function addLines1(lineNum, x, y) {
  push();
  translate(x, y);
  fill("black");
  strokeWeight(10);
  if (lineNum == "lines0") {
    line(0, 0, squareX, squareY / 2);
    line(0, squareY, squareX, squareY / 2);
  } else if (lineNum == "lines1") {
    line(0, squareY / 2, squareX, 0);
    line(0, squareY / 2, squareX, squareY);
  } else if (lineNum == "lines2") {
    line(0, squareY / 2, squareX / 2, 0);
    line(squareX / 2, 0, squareX, squareY / 2);
    line(0, squareY / 2, squareX / 2, squareY);
    line(squareX / 2, squareY, squareX, squareY / 2);
  } else if (lineNum == "lines3") {
    line(0, squareY / 2, squareX, 0);
    line(0, squareY / 2, squareX, squareY);
  } else if (lineNum == "lines4") {
    line(0, 0, squareX, squareY / 2);
    line(0, squareY, squareX / 2, squareY / 2);
    line(squareX / 2, squareY / 2, squareX, squareY / 2);
  }

  pop();
}
