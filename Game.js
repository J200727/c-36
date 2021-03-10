class Game{
    constructor(){
        console.log("game constructor called")
    }
    async start(){
        if(gamestate==0){
            playercount=await database.ref("Playercount").once("value")
            player=new Player()
            if(playercount.exists()){playercount=playercount.val()}
            form=new Form()
            form.display()
        }
        alyssa=createSprite(100,displayHeight-50)
        alyssa.addImage(car1)
        angela=createSprite(200,displayHeight-50)
        angela.addImage(car2)
        sanjo=createSprite(300,displayHeight-50)
        sanjo.addImage(car3)
        evanjo=createSprite(400,displayHeight-50)
        evanjo.addImage(car4)
        cars=[alyssa,angela,sanjo,evanjo]
    }
    static Getplayerinfo(){
        database.ref("players").on("value",function(data){
            playerinfo=data.val();
        },function(){})}
    getstate(){
        database.ref("Gamestate").on("value",function(data){
            console.log(data.val())
            gamestate=data.val()
        })
    }
    play(){
        form.hide()
       // text("LET'S START!",width/2,height/2)
       Game.Getplayerinfo()
        if(playerinfo!=undefined){
            image(track,0,-displayHeight*4,displayWidth,displayHeight*6)
            var y=150,cx,cy,ci;
            ci=0;
            cx=100;

            for(var i in playerinfo){
                ci+=1
                cx+=200
                cy=displayHeight-playerinfo[i].distance
                console.log(cars[0].x+" "+ci)
                cars[ci-1].x=cx
                cars[ci-1].y=cy
                camera.position.x=displayWidth/2
                camera.position.y=cars[ci-1].y
                if(i=="Player"+player.index){
                fill("red")
                ellipse(cx,cy,80,80)}

               // y+=50
                //textSize(20)
               // text(playerinfo[i].name+"="+playerinfo[i].score,100,y)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            cars[player.index-1].y-=50
            player.distance+=50
            player.Update_distance()
        }
        if(keyIsDown(DOWN_ARROW)&&player.index!=null){
            cars[player.index-1].y+=50
            player.distance-=50
            player.Update_distance()
        }
        if(player.distance>=3150){
            gamestate=2
            game.updatestate()
        }
    }
    updatestate(){
        database.ref("/").update({"Gamestate":gamestate})
    }
    end(){
        console.log("Gameover")
    }
}