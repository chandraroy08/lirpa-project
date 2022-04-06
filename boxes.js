class Box{
    constructor(x,y,width,height){
var option = {
    resititution : 0.4,
    friction : 1.0,
    isStatic :true
}
this.body = Bodies.rectangle(x,y,width,height,option);
this.x = x;
this.y = y;
this.width = width;
this.height = height;
World.add(world,this.body);

    }

display(){
    var angle =  this.body.angle;
    var pos = this .body.position;
    //push();
  //  Translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
 //   pop();
}

    
    }
    

