MZone(this, [EL.G], (el) => {
    console.log("trigger", this, el);
    utils.spawn(EL.Th.type, this);
    this.kill = true;
    el.kill = true;
});

setTimeout(() => {
    const player = getPlayer();
    player.MEvent.on('step', () => {
        if(utils.distance(this, getPlayer()) === 0 && !player.MContainer.has(EL.N)) {
            player.dyingMenu();
        }
    });
});

this.animationSpeed = 0.12;
this.play();
