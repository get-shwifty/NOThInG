const IDDLE_SPEED = 0.3;

this.scale.x = this.MMovable.dir === DIR.LEFT ? -1: 1;


if(this.MMovable.dir === DIR.UP) {
    if (this.MMovable.isAntiGravity()) {
        this.body.tex = 'Player_Gravity_Back';
    }
    else {
        playAnimation(this.body, 'Player_Move_Back', IDDLE_SPEED);
    }
} 
else if(this.MMovable.dir === DIR.DOWN) {
    if (this.MMovable.isAntiGravity()) {
        this.body.tex = 'Player_Gravity_Front';
    }
    else {
        playAnimation(this.body, 'Player_Move_Front', IDDLE_SPEED);
    }
}
else if(this.MMovable.dir === DIR.LEFT || this.MMovable.dir === DIR.RIGHT) {
    if (this.MMovable.isAntiGravity()) {
        this.body.tex = 'Player_Gravity_Side';
    }
    else {
        playAnimation(this.body, 'Player_Move_Side', IDDLE_SPEED);
    }
} 


this.MContainer.onDraw();