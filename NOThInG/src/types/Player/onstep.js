if(ct.actions.Up.pressed) {
    this.y -= TILE_SIZE;
} else if(ct.actions.Down.pressed) {
    this.y += TILE_SIZE;
} else if(ct.actions.Left.pressed) {
    this.x -= TILE_SIZE;
} else if(ct.actions.Right.pressed) {
    this.x += TILE_SIZE;
}

this.move();