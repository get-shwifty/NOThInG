MMovable(this);

MContainer(this, 3, 'list', 2);

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
