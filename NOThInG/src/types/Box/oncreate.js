MMovable(this);

MContainer(this, 2, 'list', 2);

this.MEvent.on('moveStart', () => {
    if(! this.MMovable.isAntiGravity()){
       ct.sound.spawn("crate") 
    }
});
this.MEvent.on('moveEnd', () => {
    if(this.MMovable.isAntiGravity()){
       ct.sound.spawn("impact") 
    }
});

this.MEvent.on('elementTaken', (el, els) => {
    if(el.MElement.getType() === EL.In) {
        MTransceiver(this, SIGNAL.ELECTRICITY, 1);
    }
});
this.MEvent.on('elementDropped', (el, els) => {
    if(!els.find(el => el.MElement.getType() === EL.In)) {
        deleteMTransceiver(this, SIGNAL.ELECTRICITY);
    }
});