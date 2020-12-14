class Paper {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2,
        }
        this.image = loadImage("images/paper.png");
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var diameter = 2 * (this.radius);
        push();
        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, diameter, diameter);
        ellipseMode(CENTER);
      //  ellipse(0, 0, diameter, diameter);
        pop();
    }
}