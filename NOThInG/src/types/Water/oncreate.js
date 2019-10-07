MZone(this, 'all', el => {
    if(el.MElement && el.MElement.getType() === EL.N) {
        this.kill = true;
        el.kill = true;
        utils.spawn('Ice', this);
    } else if(!el.MMovable || !el.MMovable.isAntiGravity()) {
        console.log('kill', el);
        el.kill = true;
    }
});

this.wave = this.addChild(new ct.types.Copy())
this.wave.tex = Math.random() > 0.5 ? 'Wave1' : 'Wave2'
this.count = 0;
