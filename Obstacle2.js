class Cone {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.img = loadImage("images/Cone.png");
        World.add(world, this.body);
    }

    display() {
        image(this.img, this.body.position.x, this.body.position.y, 50, 50);
        Matter.Body.setPosition(this.body, {x: this.body.position.x - 0.1, y: this.body.position.y});
    }
}