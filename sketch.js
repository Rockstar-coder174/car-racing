var gameState=0, database;
var position;
var playerCount;
var game,form,player;
var allPlayers;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.getState();
game.start();
}
function draw(){
  if(playerCount===4){
    gameState=1;
  }
  if(gameState===1){
    clear();
    game.play();
    
  }
}
