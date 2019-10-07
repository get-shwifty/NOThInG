if(ct.actions.Up.pressed) {
    this.MMovable.go(DIR.UP);
} else if(ct.actions.Down.pressed) {
    this.MMovable.go(DIR.DOWN)
} else if(ct.actions.Left.pressed) {
    this.MMovable.go(DIR.LEFT)
} else if(ct.actions.Right.pressed) {
    this.MMovable.go(DIR.RIGHT);
} else if(ct.actions.Take.pressed && !this.MMovable.moving) {
    let elInFront = utils.getNextDir(this, this.MMovable.dir, "MElement");
    if(elInFront) {
        this.MContainer.addElement(elInFront);
    }
    contInFront = utils.getNextDir(this, this.MMovable.dir, "MContainer");
    if (contInFront) {
        if (this.MContainer.hasFreeSlot()) {
            let elDrop = contInFront.MContainer.popElement();
            if (elDrop) {
                this.MContainer.addElement(elDrop);
            }
        }
    }
} else if(ct.actions.Drop.pressed && !this.MMovable.moving) {
    this.MContainer.dropElement(this.MMovable.dir);
}

if (ct.actions.Restart.pressed) {
    PIXI.ticker.shared.speed = 1;
    ct.pixiApp.ticker.speed = 1;
    ct.rooms.switch(ct.room.name);
}

if (ct.actions.Escape.pressed) {
    if (!this.pause) {
        this.pause = true;
        
        PIXI.ticker.shared.speed = 0;
        ct.pixiApp.ticker.speed = 0;
        this.arrMenu.push(ct.types.make("UI_Menu", ct.viewWidth / 2, SPLASH_POS.UI_Menu.y));
        this.arrMenu.push(ct.types.make("UI_Restart", ct.viewWidth / 2, SPLASH_POS.First_Box.y));
        this.arrMenu.push(ct.types.make("UI_Select", ct.viewWidth / 2, SPLASH_POS.Second_Box.y));
        this.arrMenu.push(ct.types.make("UI_Menu_Button", ct.viewWidth / 2, SPLASH_POS.Third_Box.y));
    } else if (!this.dead) {
        this.pause = false;
        
        PIXI.ticker.shared.speed = 1;
        ct.pixiApp.ticker.speed = 1;
        for (let butt of this.arrMenu) {
            butt.kill = true;
        }
    }
}
