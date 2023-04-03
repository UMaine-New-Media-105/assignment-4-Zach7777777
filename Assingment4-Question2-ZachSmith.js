let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(960, 580);
  angleMode(DEGREES);
  noLoop();
  //using js objects to make all the seprate shapes
  star1 = {
    x: 80,
    y: 70,
    starAngle: 20,
    npoints: 5,
    starScale: 1,
    starColor: "cornflowerblue",
  };
  star2 = {
    x: 180,
    y: 100,
    starAngle: 180,
    npoints: 1000,
    starScale: 0.6,
    starColor: "tomato",
  };
  star3 = {
    x: 60,
    y: 200,
    starAngle: 250,
    npoints: 10,
    starScale: 1,
    starColor: "olivedrab",
  };
  star4 = {
    x: 180,
    y: 200,
    starAngle: 10,
    npoints: 3,
    starScale: 1,
    starColor: "peru",
  };
}

function draw() {
  background("khaki");
  translate(-30,-30)
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      
      manyStars(i*220,j*240);

    }
  }
}
//this is the same star function from one of the videos about loops changed to
//work
function drawStar(star) {
  push();
  translate(star.x, star.y);
  rotate(star.starAngle);
  scale(star.starScale);
  fill(star.starColor);
  noStroke();
  let addAngle = 360 / star.npoints;
  for (let pointsDrawn = 0; pointsDrawn < star.npoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
  pop();
}

function manyStars(x, y) {
  push();
  translate(x, y);
  drawStar(star1);
  drawStar(star2);
  drawStar(star3);
  drawStar(star4);
  pop();
}
