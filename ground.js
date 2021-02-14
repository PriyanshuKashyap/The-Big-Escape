class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(0, height - 10, width, 20, options);
        World.add(world, this.body);
        
    }

    display() {
        fill("rgb(237, 204, 162)");
        rect(this.body.position.x, this.body.position.y, width, 20);
    }
}