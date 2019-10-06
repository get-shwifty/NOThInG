
if(this.MMovable.dir === DIR.UP) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Back';
    } else {
        this.tex = 'Player_Back';
    }
    this.scale.x = 1;
} else if(this.MMovable.dir === DIR.DOWN) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Front';
    } else {
        this.tex = 'Player_Iddle_Front';
        this.play();
    }
    this.scale.x = 1;
} else if(this.MMovable.dir === DIR.LEFT) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Side';
    } else {
        this.tex = 'Player_Side';
    }
    this.scale.x = -1;
} else if(this.MMovable.dir === DIR.RIGHT) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Side';
    } else {
        this.tex = 'Player_Side';
    }
    this.scale.x = 1;
}
