var databases,gamestate=0,game,playercount=null,player,form,playerinfo;
var car1,car2,car3,car4,alyssa,angela,sanjo,evanjo;
var cars=[]
function preload(){
    car1=loadImage("car1.png")
    car2=loadImage("car2.png")
    car3=loadImage("car3.png")
    car4=loadImage("car4.png")
    track=loadImage("track.png")
}

function setup(){
createCanvas(displayWidth,displayHeight)

database=firebase.database();
game=new Game()
game.getstate()
game.start()
}
function draw(){
    background("lightblue")
   if(playercount==4){
       gamestate=1
       game.updatestate()
   }
   if(gamestate==1){
       game.play()
       drawSprites()
   }
   if(gamestate==2){
       game.end()
   }
}
