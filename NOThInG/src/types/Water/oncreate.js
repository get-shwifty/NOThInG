MZone(this, 'all', el => {
    console.log(!el.MMovable, !el.MMovable.isAntiGravity())
    if(el.MElement && el.MElement.getType() === EL.N) {
        this.kill = true;
        el.kill = true;
        utils.spawn('Ice', this);
    } else if(!el.MMovable || !el.MMovable.isAntiGravity()) {
        console.log('kill', el);
        el.kill = true;
    }
});