MMovable(this, true);
MContainer(this, 4);

this.body.tex = -1;

this.MEvent.on('moveStart', () => {
    if(this.remainingOxygen === 0) {
        console.log("DYYYYYYYYING, breathing is not an option !!!");
    }
});
this.MEvent.on('moveEnd', () => {
    if(!this.breathing) {
        this.remainingOxygen--;
    }
    // console.log("Oxygen: ", this.remainingOxygen);
    if(this.MMovable.isAntiGravity()){
        if(utils.getNextDir(this, this.MMovable.dir, 'MObstacle')) {
            ct.sound.spawn("impact") ;
        }
    }
});

// *** Oxygen ***
this.MAX_OXYGEN = 4; 
this.remainingOxygen = this.MAX_OXYGEN;
this.breathing = false;

this.MEvent.on("elementTaken", (el) => {
    if (el.MElement.getType().type == EL.O.type) {
        this.breathing = true;
        this.remainingOxygen = this.MAX_OXYGEN;
    }
});

this.MEvent.on("elementDropped", (el, remainingEls) => {
    for(let obj of remainingEls) {
        if (obj.MElement.getType().type == EL.O.type) {
            return;
        }
    }
   this.breathing = false;
});
