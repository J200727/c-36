class Player{
    constructor(){
        this.index=null;
        this.score=0;
        this.name=null;
        this.distance=0;
    }
    
        
    
    updatescores(j){
        var p="players/Player"+playercount
        database.ref(p).set({"score":JSON})
    }
    update_alyssa(c){
        database.ref("/").update({"Playercount":c})
    
    }
    update_name(n){
       var p="players/Player"+playercount
        database.ref(p).update({"Name":n})
    }
    getDistance(){
        database.ref("players/Player"+this.index+"/distance").on("value",(d)=>{this.distance=d.val()})    
}
Update_distance(){
    database.ref("players/Player"+this.index).update({"distance":this.distance})
}
}
