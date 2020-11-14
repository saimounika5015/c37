var database;
var form;
var playerCount = 0;
var gameState = 0;
var game;
var player;
var allPlayers;
var distance=0;

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getStarted();
    game.start();
}

function draw(){
    background("white");
    console.log(gameState);
    
    if(playerCount === 4) {
      game.update(1);
      console.log(playerCount);  
    }

    if(gameState === 1) {
      clear();
      game.play();
    }

    
    drawSprites();
}

