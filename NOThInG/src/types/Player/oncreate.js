MMovable(this, true);
MContainer(this, 4);

this.body.tex = -1;

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

// *** Radioactivity ***
this.MAX_RADIOACTIVITY = 5; 
this.currentRaioactivity = 0;
this.numRadEl = 0;

this.MEvent.on("elementTaken", (el) => {
    if (el.MElement.getType().type == EL.Th.type) {
        this.numRadEl++;
    }
});

this.MEvent.on("elementDropped", (el, remainingEls) => {
    if (el.MElement.getType().type == EL.Th.type) {
        this.numRadEl--;
    }
});

// *** MEvent : moving ***
this.MEvent.on('moveStart', () => {
    if(this.remainingOxygen === 0) {
        console.log("DYYYYYYYYING, breathing is not an option !!!");
    }
    if(this.currentRaioactivity === this.MAX_RADIOACTIVITY) {
        console.log("DYYYYYYYYING, Tchernobyl got you !!!");
    }
});
this.MEvent.on('moveEnd', () => {
    if(!this.breathing) {
        this.remainingOxygen--;
    }
    this.currentRaioactivity += this.numRadEl;
    console.log("Radioactivity: ", this.currentRaioactivity);
    // console.log("Oxygen: ", this.remainingOxygen);
    if(this.MMovable.isAntiGravity()){
        if(utils.getNextDir(this, this.MMovable.dir, 'MObstacle')) {
            ct.sound.spawn("impact") ;
        }
    }
});


