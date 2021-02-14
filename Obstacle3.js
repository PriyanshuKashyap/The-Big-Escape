class Goo {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        this.img = loadImage("images/Green_goo.png");
    }

    display() {
        image(this.img, this.body.position.x, this.body.position.y, this.w, this.h);
        Matter.Body.setPosition(this.body, {x: this.body.position.x, y: this.body.position.y - 0.05});
    }
}