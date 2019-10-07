MActivable(this,false, 1);
MMovable(this);
MContainer(this, 1);
MEvent(this);
this.body.tex = -1

this.MEvent.on("elementTaken", (el) => {
    if (el.MElement.getType().type == EL.Th.type) {
        this.MActivable.activate();
    }
});

this.MEvent.on("elementDropped", (el, remainingEls) => {
    for(let obj of remainingEls) {
        if (obj.MElement.getType().type == EL.Th.type) {
            return;
        }
    }
   this.MActivable.deactivate();
});

// setTimeout(() => { 
//     console.log(utils.getUnderDistance(this,3,'MOpenable'));
// }, 0);
this.body.background = this.body.addChild(new PIXI.Sprite(ct.res.getTexture('Reactor_Background', 0)))
this.body.core = this.body.addChild(new ct.types.Copy())
