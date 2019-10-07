MActivable(this,false, 1);
MContainer(this, 1);
MEvent(this);

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
