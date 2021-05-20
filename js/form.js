class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Race!");
        this.greet=createElement('h3');
        
    }
    hide(){
        this.greet.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title=createElement("h2");
        title.html("Need for Speed");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(200,250);
        this.button.mousePressed( ()=>{
            this.input.hide();
            this.button.hide();
            playerCount+=1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.name=this.input.value();
            player.update(player.name);
            this.greet.html("Hey there! "+player.name);
            this.greet.position(130,160);
        })
    }
}