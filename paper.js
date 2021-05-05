class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.5,
           'friction':0.1,
           'density':1.3
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
       this.radius=radius

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
       ellipseMode(CENTER);

        fill ("yellow");

        ellipse(0,0,this.r,this.r);
        pop();

    }
};