class Exit {
    constructor(x, y, w) {
        var options = {
            isStatic: true
        }
        this.w = w;
        this.h = this.w;
        this.body = Bodies.rectangle(x, y, w);
        this.img = loadImage("images/GameGate_New.jpg");
        World.add(world, this.body);
    }

    display() {
        fill("green");
        //rect(this.body.position.x, this.body.position.y, this.w, this.h);
        image(this.img, this.body.position.x, this.body.position.y, this.w, this.h);
        /*Matter.Body.setPosition(this.body, {x: this.body.position.x, y: this.body.position.y + 10});
        Matter.Body.setPosition(this.body, {x: this.body.position.x - 0.01, y: this.body.position.y - 10});*/
        if (this.body.position.x === 0) {
            this.body.position.x = this.body.position.x * -1;
        }
    }
}