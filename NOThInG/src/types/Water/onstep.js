const player = getPlayer();

for(const el of utils.getUnderDistance(this, 0)) {
    if(el.MElement && el.MElement.getType() === EL.N) {
        this.kill = true;
        el.kill = true;
        utils.spawn('Ice', this);
    } else if((!el.MMovable || !el.MMovable.isAntiGravity()) && el.type !== 'Water' && el.type.indexOf('UI') < 0) {
        ct.sound.spawn('water_splash');
        el.kill = true;
        if(el === player) {
            getPlayer().dyingMenu();
        }
    }
}