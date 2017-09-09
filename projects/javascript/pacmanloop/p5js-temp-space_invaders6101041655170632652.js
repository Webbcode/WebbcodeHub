var invaders = [];
var invadNum = 50;
var projectiles = [];
var spaceship;
var state = 0;
var score = 0;
var pac;
var ghost;
var pacImg = [];
var pacLImg = [];
var ghostImg = [];
var pacBuffer;
var invadBuffer;


function setup() {
  pacBuffer = createCanvas(windowWidth,60);
  
  pac = new entit(32 * 3, (60 - 32) / 2, color(255,255,0));
  ghost = new entit2(32, (60 - 32) / 2, color(255,0,0));
  
  pacImg[0] = loadImage('https://webbcode.github.io/retro-imgs/pacmanclose.png');
  pacImg[1] = loadImage('https://webbcode.github.io/retro-imgs/pacmanopen.png');
  
  pacLImg[0] = loadImage('https://webbcode.github.io/retro-imgs/pacmanclose.png');
  pacLImg[1] = loadImage('https://webbcode.github.io/retro-imgs/pacmanlopen.png');
  
  ghostImg[0] = loadImage('https://webbcode.github.io/retro-imgs/Pac-Man-Ghost-PNG-Clipart[1].png');
  ghostImg[1] = loadImage('https://webbcode.github.io/retro-imgs/ChangeColor_28-8-2017-5-54-45[1].jpg');
  
  
  
  for(var i = 0;i < invadNum;i++){
    invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
  }
  
  spaceship = new ship(width / 2 - 16, height - 32);
}

function createInvadBuffer(){
  invadBuffer = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);
  
  if(pacBuffer){
     background(0,0,0);
  //fill(255,0,0);
  //rect(0,0,32,32);
  
  pac.move();
  pac.display();
  
  ghost.move();
  ghost.display();
  }
  
  if(invadBuffer){
  if(state === 0){
    
    textSize(32);
    fill(255);
    invadBuffer.text("Press any key to continue", width / 2 - 32 * 25 / 4, height / 2);
    
//     stroke(255);
//     line(0, height / 2, width, height / 2);
//     line(width / 2, 0, width / 2, height);
    
    
  }else if(state === 1){
    
    textSize(16);
    fill(255);
    invadBuffer.text("Score:" + score, 0, 16);
    
    for (var i = 0;i < invadNum;i++){
      
      
        invaders[i].move();
        invaders[i].disp();
        
        
      
      if(deadNum === invadNum){
        state === 3
      }
      
      if(deadNum !== 0){
        invaders[i].speed = 1.5 + 3 * deadNum / invadNum;
      }
    }
    
    spaceship.update();
    spaceship.disp();
  }else if(state === 2){
    
    textSize(32);
    fill(255);
    invadBuffer.text("Game over", width / 2 - 32 * 9 / 4.5, height / 2);
    
//     stroke(255);
//     line(0, height / 2, width, height / 2);
//     line(width / 2, 0, width / 2, height);
    
  }else if(state === 3){
    
    textSize(16);
    fill(255);
    invadBuffer.text("Score:" + score, 0, 16);
    
    textSize(32);
    fill(255);
    
    invadBuffer.text("You won!(a round)", width / 2 - 32 * 17 / 4.5, height / 2);
    
//     stroke(255);
//     line(0, height / 2, width, height / 2);
//     line(width / 2, 0, width / 2, height);
    
  }
  }
}



function keyPressed() {
  if(state === 0){
    state = 1;
  }else if(state === 2){
    state = 1;
    
    for(var i = 0;i < invadNum;i++){
      invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
    }
    
    spaceship = new ship(width / 2 - 16, height - 32);
    
    score = 0;
    
  }else if(state === 3){
    state = 1;
    
    for(var i = 0;i < invadNum;i++){
      invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
    }
  
    spaceship = new ship(width / 2 - 16, height - 32);
  
  }
  
  return false;
}

function entit(x,y, tcolor){
  this.x = x;
  this.y = y;
  this.speed = 3;
  this.dir = -1;
  this.tcolor = tcolor;
  this.anim = new anima(0,1,20);
  
  this.move = function(){
    this.x += this.speed * this.dir;
    
    if(this.x >= width + 32 * 3){
      this.dir *= -1;
    }else if(this.x <= -32 * 1){
      this.dir *= -1;
    }
    
    this.anim.update();
  }
  
  this.display = function(){
    if(this.dir === 1){
      pacBuffer.image(pacImg[this.anim.get()], this.x, this.y, 32, 32);
    }else{
      pacBuffer.image(pacLImg[this.anim.get()], this.x, this.y, 32, 32);
    }
  }
}

function entit2(x,y, tcolor){
  this.x = x;
  this.y = y;
  this.speed = 3;
  this.dir = -1;
  this.tcolor = tcolor;
  
  this.move = function(){
    this.x += this.speed * this.dir;
    
    if(this.x >= width + 32){
      this.dir *= -1;
    }else if(this.x <= -32 * 3){
      this.dir *= -1;
    }
  }
  
  this.display = function(){
    if(this.dir === 1){
      pacBuffer.image(ghostImg[0],this.x, this.y, 32, 32);
    }else{
      pacBuffer.image(ghostImg[1],this.x, this.y, 32, 32);
    }
  }
}

function anima(min, max, rate){
  this.min = min;
  this.max = max;
  this.rate = rate;
  this.num = min;
  
  this.update = function(){
    if(frameCount % rate === 0){
      this.num++;
      
      if(this.num > this.max){
        this.num = this.min;
      }
    }
  }
  
  this.get = function(){
    return this.num;
  }
}
