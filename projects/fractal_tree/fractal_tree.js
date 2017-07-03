var angle;
var minLen = 4;
var angSlider;

function setup() {
  createCanvas(500, 500);
  
  angSlider = createSlider(-2 * PI, 2 * PI, PI, 0.01);
  
  angle = radians(90);
}

function draw() {
  angle = angSlider.value();
  
  background(0);
  translate(width / 2, height);
  stroke(255);
  branch(100);
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > minLen){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
