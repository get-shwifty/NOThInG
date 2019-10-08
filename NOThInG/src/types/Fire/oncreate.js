MZone(this, [EL.N], el => {
    this.kill = true;
    el.kill = true;
});

setTimeout(() => {
    const player = getPlayer();
    player.MEvent.on('step', () => {
        if(utils.distance(this, player) === 0 && !player.MContainer.has(EL.N)) {
            player.dyingMenu();
        }
    });
}, 0);

this.animationSpeed = 0.12;
this.play();
