class Game{
  constructor() {

  }
 
  getStarted() {
    var gameStateRefer = database.ref("gameState"); 
    gameStateRefer.on("value", function(data) {
      gameState = data.val();
    });
  }

  async start() {
    if(gameState === 0) {
      console.log(gameState);
      player = new Player();

      var playerRefer = await database.ref('playerCount').once("value");
      if(playerRefer.exists()) {
        playerCount = playerRefer.val();
        player.getCount();
      }

      form = new Form();  
      form.display();
      console.log("I am in start");
    }  
  }
  update(count) {
    database.ref("/").update({gameState: count});
    console.log("HELLO");
  }  

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      console.log(allPlayers)
      var display_position = 130;
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }





}