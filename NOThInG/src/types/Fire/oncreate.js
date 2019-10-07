MZone(this, [EL.G], (el) => {
    console.log("trigger", this, el);
    utils.spawn(EL.Th, this);
    this.kill = true;
    el.kill = true;
});

setTimeout(() => {
    getPlayer().MEvent.on('step', () => {
        if(utils.distance(this, getPlayer()) === 0) {
            // kill human
            console.log('kill');
        }
    });
})


this.animationSpeed = 0.12;
this.play();