const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var ground, engine, world, red_gas, coneBody, goo, pk_player, maze, exit, gameState, score, count, emoji;
function preload() {
    //emoji = loadAnimation("images/robot.png", "images/sad_emoji.png");

}
/*numberOfHearts*/
//var rectangles = [];
/*for (var i = 0; i <= rectangles.length - 1; i++) {
        //console.log(rectangles[i]);
        rectangles[i].display();
    }*/
//numberOfHearts = 3;
score = 0;
count = 0;
gameState = "serve";
function setup() {
    //number = Math.round(random(0, 4));
    //arr = [[50, 50], [width - 50, 50], [50, height - 50], [width - 50, height - 50]];
    engine = Engine.create();
    world = engine.world;
    //images = ["images/4968.jpg", "images/image.jpg", "images/image3.jpeg"];
    colors = ["brown", "green", "red", "grey"];
    bg = random(colors);
    createCanvas(1000, 700);
    //bg = loadImage("images/nature-quotes-1557340276.jpg");
    pk_player = new Player(40, height - 60, 20);
    ground = new Ground();
    //numberOfHearts = 3;
    red_gas = new RedGas(random(0, width), random(0, height - 60), 50, 50);
    Body.applyForce(red_gas.body, red_gas.body.position, {x: random(0, 5), y: random(0, 5)});
    coneBody = new Cone(random(0, width), random(0, height - 60), 50, 50);
    goo = new Goo(width/2, random(0, height), width, 10);
    exit = new Exit(width - 100, 0, 100);
    Matter.Body.setPosition(red_gas.body, {x: random(0, width), y: random(0, height)});
    Matter.Body.setPosition(coneBody.body, {x: random(0, width), y: random(0, height)});
       
    
}

function draw() {
    background(bg);
    //red_gas.display();
    pk_player.display();
    ground.display();
    
    coneBody.display();
    //console.log(Matter.Detector.canCollide(pk_player.body, red_gas.body) || Matter.Detector.canCollide(pk_player.body, coneBody.body));
    //console.log(pk_player.body.position.x + 50 >= (red_gas.x || cone.x));
    if (gameState !== "serve") {
        text(score, exit.body.position.x, height - 100);
        goo.display();
    }
    

    exit.display();
    if (gameState === "serve") {
        background("brown");
        textSize(20);
        fill("white");
        text("Welcome to Game Masters League made by Priyanshu.", 0, 40);
        text("Story: The player is currently trapped at a spot. The player must reach home(the exit gate) and showcase its abilities to fight obstacles. ", 0, 75);
        text("The obstacles will block the player across the player's journey.", 0, 110);
        text("Over the course of this game/level, the player has 3 chances of survival. If it collides with the obstacles or the ", 0, 145);
        text("enemies, it loses each chance.", 0, 180);
        text("Can you use your dedication and potential to win the game?", 0, 215);
        text("The player has a time limit of 3500 frames(145 seconds).", width/2, height/2);
        text("Press the space key to start the game.", 0, 240);
        fill("black");
        text("-Priyanshu", 0, 275);
    }

    if (gameState === "end") {
        Matter.Body.setStatic(pk_player.body, true);
        //Matter.Body.setStatic(exit.body, true);
        Matter.Body.setStatic(coneBody.body, true);
        Matter.Body.setStatic(red_gas.body, true);
        Matter.Body.setStatic(goo.body, true);
        //numberOfHearts = 3;
        score = 0;
        count = 0;
        if (keyCode === 32) {
            Matter.Body.setPosition(pk_player.body, {x: 40, y: height - 60});
            //text("Press the space key to restart", 0, 40);
            gameState = "serve"; 
        }
    }

    /*if (pk_player.body.position.x + 50 >= exit.body.position.x || count >= 3000) {
        //textSize(50);
        background("blue");
        fill("green");
        text("Game Over! Press Space in order to serve again.", width - 700, 50);
        gameState = "end";
        //gameState = "serve";
        
    }*/

    if (gameState === "play") {
        red_gas.display();
        coneBody.display();
        goo.display();
        count++;
        if (count % 20 === 0) {
            score++;
        }

        /*if (count >= 3000 || ) {
            //frameCount % 3500 === 0
            
            background("gray");
            fill("white");
            text("Please press space to restart this game.", width/2, height/2);
            gameState = "end";
            
            if (keyCode ===  32) {
                Matter.Body.setPosition(pk_player.body, {x: 40, y: height - 60});
                
                //text("Press the space key to restart", 0, 40);
                gameState = "serve";
            }
            
        }*/

        if (pk_player.body.position.x + 50 >= exit.body.position.x || count >= 3000) {
            //textSize(50);
            //changeImage("images/sad_emoji.png", label)
            background("blue");
            fill("green");
            text("Game Over! Press Space in order to serve again.", width - 700, 50);
            gameState = "end";
            //gameState = "serve";
            
        }

        if (isCollided(pk_player, red_gas) || isCollided(pk_player, coneBody) || isCollided(pk_player, goo)) {
            //console.log(numberOfHearts);
            //console.log(Matter.Detector.canCollide(pk_player.body, red_gas.body) || Matter.Detector.canCollide(pk_player.body, coneBody.body));
            //World.remove(world, pk_player.body);
            //numberOfHearts--;
            gameState = "end";
        }


        
    }
    //console.log(frameCount);
    //console.log(numberOfHearts);
     
}

/*function mouseDragged() {
    Matter.Body.setPosition(pk_player.body, {x: mouseX, y: mouseY});
}*/

function keyPressed() {
    if (keyCode === 32) {
        //Matter.Body.setPosition(pk_player.body, {x: 40, y: height - 60});
        gameState = "play";
    }

    if (gameState === "play") {
        if (keyCode === 39) {
            Matter.Body.setPosition(pk_player.body, {x: pk_player.body.position.x + 5, y: pk_player.body.position.y});
        } else if (keyCode === 37) {
            Matter.Body.setPosition(pk_player.body, {x: pk_player.body.position.x - 5, y: pk_player.body.position.y});
        } else if (keyCode === 38) {
            Matter.Body.setPosition(pk_player.body, {x: pk_player.body.position.x, y: pk_player.body.position.y - 5});
        } else if (keyCode === 40) {
            Matter.Body.setPosition(pk_player.body, {x: pk_player.body.position.x, y: pk_player.body.position.y + 5});
        }
        //goo.display();
    }

    
    //goo.display();


}
/*Complete submission:
 Story/Concept(Plan)
 Code
 Github link
 App for the mobile(APK)*/

 /*
background on the text 1
score required 1
restart 1
Game Over 1
image changed 1

Errors(1): p5.prototype
 */