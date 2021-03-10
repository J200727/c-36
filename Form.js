class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("PLAY")
        this.greeting=createElement("h2")
    }
    display(){
        var title=createElement("h1")
        title.html("multiplayer game")
        title.position(displayWidth/2,30)
        
        this.input.position(displayWidth/2,displayHeight/2-30)
       
        this.button.position(displayWidth/2,displayHeight/2)
        this.button.mousePressed(()=>{
           this.input.hide()
           this.button.hide()
            var name=this.input.value()
            player.name=name
            this.greeting.html("Welcome! "+name)
            this.greeting.position(displayWidth/2,displayHeight/2)
            playercount++
            player.index=playercount
            player.update_alyssa(playercount)
            player.update_name(name)
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}