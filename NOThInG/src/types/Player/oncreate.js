MMovable(this, true);
MContainer(this, 4);

this.body.tex = -1;

this.MEvent.on('moveStart', () => {
});
this.MEvent.on('moveEnd', () => {
    if(this.MMovable.isAntiGravity()){
        if(utils.getNextDir(this, this.MMovable.dir, 'MObstacle')) {
            ct.sound.spawn("impact") ;
        }
    }
});
