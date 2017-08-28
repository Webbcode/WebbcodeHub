var pac;
var ghost;
var pacImg = [];
var pacLImg = [];

function setup() {
  createCanvas(windowWidth,60);
  
  pac = new entit(32 * 3, (60 - 32) / 2, color(255,255,0));
  ghost = new entit2(32, (60 - 32) / 2, color(255,0,0));
  
  pacImg[0] = loadImage('https://webbcode.github.io/retro-imgs/pacmanclose.png');
  pacImg[1] = loadImage('https://webbcode.github.io/retro-imgs/pacmanopen.png');
  
  pacLImg[0] = loadImage('https://webbcode.github.io/retro-imgs/pacmanclose.png');
  pacLImg[1] = loadImage('https://webbcode.github.io/retro-imgs/pacmanlopen.png');
}

function draw() {
  background(0,0,0);
  //fill(255,0,0);
  //rect(0,0,32,32);
  
  pac.move();
  pac.display();
  
  ghost.move();
  ghost.display();
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
      image(pacImg[this.anim.get()], this.x, this.y, 32, 32);
    }else{
      image(pacLImg[this.anim.get()], this.x, this.y, 32, 32);
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
    fill(this.tcolor);
    rect(this.x, this.y, 32, 32);
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