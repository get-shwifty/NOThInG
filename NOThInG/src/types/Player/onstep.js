if (!ct.room.menuManager.menuOn()) {
    if(ct.actions.Up.pressed) {
        this.MMovable.go(DIR.UP);
    } else if(ct.actions.Down.pressed) {
        this.MMovable.go(DIR.DOWN)
    } else if(ct.actions.Left.pressed) {
        this.MMovable.go(DIR.LEFT)
    } else if(ct.actions.Right.pressed) {
        this.MMovable.go(DIR.RIGHT);
    } else if(ct.actions.Take.pressed && !this.MMovable.moving) {
        this.MContainer.takeElement(this.MMovable.dir);
    } else if(ct.actions.Drop.pressed && !this.MMovable.moving) {
        this.MContainer.dropElement(this.MMovable.dir);
    }
}