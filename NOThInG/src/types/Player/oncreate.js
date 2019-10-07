MMovable(this, true);
MContainer(this, 4, 'list');

this.body.tex = -1;

// *** Pausing and Menu ***
this.pause = false;
this.dead = false;
this.arrMenu = [];

// *** Oxygen ***
this.MAX_OXYGEN = 4; 
this.remainingOxygen = this.MAX_OXYGEN;
this.breathing = false;

this.oxygenLabel = new PIXI.Text('Oxygen: ' + this.remainingOxygen, ct.styles.get('oxygen_label'));
ct.room.addChild(this.oxygenLabel);
this.oxygenLabel.x = ct.viewWidth - 450;
this.oxygenLabel.y = 80;
this.oxygenLabel.visible = true;

this.MEvent.on("elementTaken", (el) => {
    ct.sound.spawn("pickup")
    if (el.MElement.getType().type == EL.O.type) {
        this.breathing = true;
        this.oxygenLabel.visible = false;
        this.remainingOxygen = this.MAX_OXYGEN;
    }
});

this.MEvent.on("elementDropped", (el, remainingEls) => {
    ct.sound.spawn("pickup")
    for(let obj of remainingEls) {
        if (obj.MElement.getType().type == EL.O.type) {
            return;
        }
    }
   this.breathing = false;
   this.oxygenLabel.visible = true;
});

// *** Radioactivity ***
this.MAX_RADIOACTIVITY = 5; 
this.currentRadioactivity = 0;
this.numRadEl = 0;

this.radioactivityLabel = new PIXI.Text('Radioactivity: ' + this.currentRadioactivity + ' / ' + this.MAX_RADIOACTIVITY, ct.styles.get('radioactivity_label'));
ct.room.addChild(this.radioactivityLabel);
this.radioactivityLabel.x = ct.viewWidth - 450;
this.radioactivityLabel.y = 130;
this.radioactivityLabel.visible = false;

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

// *** Dying and Menu ***
this.dyingMenu = () => {
    this.pause = true;
    this.dead = true;
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
    ct.types.make("UI_Menu", ct.viewWidth / 2, SPLASH_POS.UI_Menu.y);
    ct.types.make("UI_Restart", ct.viewWidth / 2, SPLASH_POS.First_Box.y);
    ct.types.make("UI_Select", ct.viewWidth / 2, SPLASH_POS.Second_Box.y);
    ct.types.make("UI_Menu_Button", ct.viewWidth / 2, SPLASH_POS.Third_Box.y);
};

// *** MEvent : moving ***
this.MEvent.on('moveStart', () => {
    if(!this.MMovable.isAntiGravity()){
        let footstep_sounds = ["footstep_1", "footstep_2", "footstep_3"]
        ct.sound.spawn(footstep_sounds[Math.floor(Math.random() * Math.floor(3))])
    }
});
this.MEvent.on('moveEnd', () => {
    if(!this.breathing) {
        this.remainingOxygen--;
    }
    this.currentRadioactivity += this.numRadEl;
    if(this.currentRadioactivity) {
        this.radioactivityLabel.visible = true;
    }
    // console.log("Radioactivity: ", this.currentRadioactivity);
    // console.log("Oxygen: ", this.remainingOxygen);
    
    if(this.remainingOxygen < 0) {
        this.dyingMenu();
        // console.log("DYYYYYYYYING, breathing is not an option !!!");
    }
    if(this.currentRadioactivity > this.MAX_RADIOACTIVITY) {
        this.dyingMenu();
        // console.log("DYYYYYYYYING, Tchernobyl got you !!!");
    }
    
    if(this.MMovable.isAntiGravity()){
        if(utils.getNextDir(this, this.MMovable.dir, 'MObstacle')) {
            ct.sound.spawn("impact") ;
        }
    }
});


