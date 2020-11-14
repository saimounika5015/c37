class Form {
  constructor() {
    this.greeting=createElement("h2");
    this.input=createInput("Name");
    this.button=createButton("Play");

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
  }

  display() {
    var title = createElement("h2");
    title.html("Car Racing Game");
    title.position(380, 110);

   
    this.input.position(380,200);

    //var button = createButton("Play");
    this.button.position(380, 250);
    this.button.mousePressed(()=> {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount++;
        player.updateCount(playerCount);
        player.updateName();
        
       // var greeting = createElement("h3");
       this. greeting.html("Hello! "+this.name);
       this. greeting.position(420,150);
    } );
    
  }

}