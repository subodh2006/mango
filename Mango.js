class Mango{
    constructor(x,y,r){
        var options = {
            isStatic:true,
        restitution: 0.3,
        friction:0.2,
     density:1.2
    
   
        }
       // this.mango = loadImage("Plucking+Mangoes/images/mango.png");

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        
        }
    
     display(){
    var paperpos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(paperpos.x,paperpos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    fill("orange");
    ellipse(0,0,this.r,this.r);
    pop();
    
    
        }
    
        
    }
        
