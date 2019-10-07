MMovable(this, true);
MContainer(this, 1);
const transmitter = MTransmitter(this, SIGNAL.ELECTRICITY, 2);

const isTh = obj => obj.MElement.getType().type === EL.Th.type;

this.MEvent.on("elementTaken", (el) => {
    if (isTh(el)) {
        transmitter.activate();
    }
});

this.MEvent.on("elementDropped", (el, remainingEls) => {
    if(!remainingEls.find(isTh)) {
        transmitter.deactivate();
    }
});

// setTimeout(() => { 
//     console.log(utils.getUnderDistance(this,3,'MOpenable'));
// }, 0);
this.body.tex = -1;
this.body.background = this.body.addChild(new PIXI.Sprite(ct.res.getTexture('Reactor_Background', 0)));
this.body.core = this.body.addChild(new ct.types.Copy());
