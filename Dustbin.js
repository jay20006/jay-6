class Dustbin {

    constructor(x,y,r)
{
    this.x=x;
    this.y=y;
    this.dustbinWidth=200;
    this.dustbinHeight=100;
    this.wallThickness=20;
    this.angle=0;

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.wallThickness,this.dustbinWidth,{isStactic:true})
    this.leftBody=Bodies.rectangle=(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStactic:true})
    Matter.body.setAngle(this.leftBody,this.angle);

    this.bottomBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.y-this.dustbinHeight,this.wallThickness,this.dustbinHeight,{isStactic:true})
    Matter.body.setAngle(this.rightWallbody,-1,this.angle);
    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightWallbody);


}
display()
{
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftBody.position;
    var posRight=this.rightWallbody.position;


    push()
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rotate(this.angle)
    rect(0,0,this.wallThickness,this.dustbinHeight);
    Pop()

    
    push()
    translate(posRight.x,posRight.y);
    rectMode(CENTER)
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rotate(-1,this.angle)
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop()



    push()
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER)
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.dustbinWidth,this.wallThickness);
    pop()






}
}