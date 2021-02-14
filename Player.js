class Player {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        };
        this.w = 50;
        this.h = 50;
        this.body = Bodies.circle(x, y, radius, options);
        this.img = loadImage("images/robot.png");
        World.add(world, this.body);
    }

    display() {
        image(this.img, this.body.position.x, this.body.position.y, this.w, this.h);
    }
}