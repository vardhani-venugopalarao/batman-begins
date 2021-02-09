class Drops
{
    constructor(x, y)
    {
        var options =
        {
            friction: 0.01,
            restitution: 0.5
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
        this.pos = this.body.position;
    }
    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body, {x: random(20, width-20), y: random(0, 750)})
        }
    }
    display()
    {
        push();
        translate(this.pos.x, this.pos.y);
        fill(rgb(0, 0, 128));
        ellipseMode(RADIUS);
        ellipse(0, 0, 10);
        pop();
    }
}