if (!this.menuManager.menuOn()) {
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
}

if (ct.actions.Restart.pressed) {
    this.menuManager.clearMenu();
    ct.rooms.switch(ct.room.name);
}

if (!this.dead && !this.win && ct.actions.Menu.pressed) {
    if (!this.menuManager.menuOn()) {
        this.menuManager.showGameMenu();
    } else {
        this.menuManager.clearMenu();
    }
}
