MMovable(this);
MContainer(this, 3);

this.MEvent.on('moveStart', () => {
    console.log("moveStart");
    if(! this.MMovable.isAntiGravity()){
       ct.sound.spawn("crate") 
    }
});
this.MEvent.on('moveEnd', () => {
    console.log("moveEnd");
    if(this.MMovable.isAntiGravity()){
       ct.sound.spawn("impact") 
    }
});
