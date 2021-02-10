class Paper {
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=bodies.circle(ths.x,this.y,thisr/2,options);
        World.add(world,this.body)
    }
    display()
    {
        var paperPos=this.body.position

        Push()
        translate(paperPos.x,paperPos.y);
        rectmode(CENTER)
        strokeweight(3);
        fill(225,0,225)
        ellipse(0,0,this.r,this.r);
        Pop()


    }
}