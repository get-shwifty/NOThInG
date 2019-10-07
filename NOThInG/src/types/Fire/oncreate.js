MZone(this, [EL.G], (el) => {
    console.log("trigger", this, el);
    utils.spawn(EL.Th, this);
    this.kill = true;
    el.kill = true;
});

this.animationSpeed = 0.12;
this.play();