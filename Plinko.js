class Plinko{
    construtor(x,y,r){

      var options ={

        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
      
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;

    World.add(world, this.body);

    }

  display(){
    
     var pos = this.body.position;
     
     
     ellipseMode(CENTER);
     ellipse(this.pos.x, this.pos.y, this.r);
  
  }
}
