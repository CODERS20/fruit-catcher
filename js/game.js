class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =200;
                 var y=500;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                
                     index = index+1;
                   //  x = 500-allPlayers[plr].distance;
                    // y=500;
                     
                     players[0].x = x;
                     players[1].x = x+600;
                     players[0].y = y;
                     players[1].y = y
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         if(plr = "player" + player.index){
                            text(allPlayers[plr].name ,players[index-1].x -50,players[index-1].y +10);
                         }
                        
                         //text(allPlayers[plr].name ,800-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    players[0,1].x = players[0,1].x+30
                    players[0,1].update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    players[0,1].x = players[0,1].x-30
                    players[0,1].update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (fruitGroup.isTouching(players)) {
                     //fill code here, to destroy the objects.
                     console.log("FRUIT")
                     fruitGroup.destroyEach();
                     gameState = 2;
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
       textSize(30);
       fill(255,255,255);
       text("GAME HAS ENDED",500,500);
    }
}