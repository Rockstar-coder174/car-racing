class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;

    }
    getCount(){
        var playerCountref=database.ref("playerCount");
        playerCountref.on("value", (data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+playerCount;
        database.ref(playerIndex).update({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerIndexref=database.ref('players');
        playerIndexref.on("value",(data)=>{
            allPlayers=data.val();
            
        })
    }

        
   
    }