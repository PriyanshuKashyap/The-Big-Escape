class RedGas {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.img = loadImage("images/fire_new.png");
        World.add(world, this.body);
    }

    display() {
        image(this.img, this.body.position.x, this.body.position.y, 50, 50);
        Matter.Body.setPosition(this.body, {x: this.body.position.x - 0.1, y: this.body.position.y});
    }
}