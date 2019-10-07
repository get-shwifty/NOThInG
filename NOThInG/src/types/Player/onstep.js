if(ct.actions.Up.pressed) {
    this.MMovable.go(DIR.UP);
} else if(ct.actions.Down.pressed) {
    this.MMovable.go(DIR.DOWN)
} else if(ct.actions.Left.pressed) {
    this.MMovable.go(DIR.LEFT)
} else if(ct.actions.Right.pressed) {
    this.MMovable.go(DIR.RIGHT);
} else if(ct.actions.Take.pressed) {
    let objInFront = utils.getNextDir(this, this.MMovable.dir);
    if(objInFront.MElement) {
        this.MContainer.addElement(objInFront);
    } else if (objInFront.MContainer) {
        if (this.MContainer.hasFreeSlot()) {
            let elDrop = objInFront.MContainer.popElement();
            if (elDrop) {
                this.MContainer.addElement(elDrop);
            }
        }
    }
} else if(ct.actions.Drop.pressed) {
    this.MContainer.dropElement(this.MMovable.dir);
}

this.MMovable.onStep();
this.move();