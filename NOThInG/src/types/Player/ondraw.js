
if(this.MMovable.dir === DIR.UP) {
    if (this.MAntiGravity) {
        this.tex = 'Player_Back_Gravity';
    } else {
        this.tex = 'Player_Back';
    }
    this.scale.x = 1;
} else if(this.MMovable.dir === DIR.DOWN) {
    if (this.MAntiGravity) {
        this.tex = 'Player_Front_Gravity';
    } else {
        this.tex = 'Player_Front';
    }
    this.scale.x = 1;
} else if(this.MMovable.dir === DIR.LEFT) {
    self.lastMove = DIR.LEFT;
    if (this.MAntiGravity) {
        this.tex = 'Player_Side_Gravity';
    } else {
        this.tex = 'Player_Side';
    }
    this.scale.x = -1;
} else if(this.MMovable.dir === DIR.RIGHT) {
    if (this.MAntiGravity) {
        this.tex = 'Player_Side_Gravity';
    } else {
        this.tex = 'Player_Side';
    }
    this.scale.x = 1;
}

this.MContainer.onDraw();
