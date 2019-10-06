if(ct.actions.Up.pressed) {
    if(this.MMovable.goUp()) {
    }
} else if(ct.actions.Down.pressed) {
    if(this.MMovable.goDown()) {
    }
} else if(ct.actions.Left.pressed) {
    if(this.MMovable.goLeft()) {
    }
} else if(ct.actions.Right.pressed) {
    if(this.MMovable.goRight()) {
    }
} else if(ct.actions.Take.pressed) {
    let objInFront = utils.getNextDir(this, this.MMovable.dir);
    if(objInFront.MElement) {
        this.MContainer.addElement(objInFront);
    } else if (objInFront.MContainer) {
        let obj = objInFront.MContainer.popElement();
        this.MContainer.addElement(obj);
    }
} else if(ct.actions.Drop.pressed) {
    this.MContainer.dropElement(this.MMovable.dir);
}
