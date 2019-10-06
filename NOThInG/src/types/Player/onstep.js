if(ct.actions.Up.pressed) {
    if(this.MMovable.goUp()) {
        self.lastMove = DIR.UP;
    }
} else if(ct.actions.Down.pressed) {
    if(this.MMovable.goDown()) {
        self.lastMove = DIR.DOWN;
    }
} else if(ct.actions.Left.pressed) {
    if(this.MMovable.goLeft()) {
        self.lastMove = DIR.LEFT;
    }
} else if(ct.actions.Right.pressed) {
    if(this.MMovable.goRight()) {
        self.lastMove = DIR.RIGHT;
    }
}