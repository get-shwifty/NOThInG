const playAnimation = function(obj, animName, animSpeed){
    if (obj.tex !== animName){
        obj.animationSpeed = animSpeed
        obj.tex = animName;
        obj.play();
    }
}
const IDDLE_SPEED = 0.3
this.scale.x = this.MMovable.dir === DIR.LEFT ? -1: 1;

if(this.MMovable.dir === DIR.UP) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Back';
    }
    else {
        playAnimation(this, 'Player_Move_Back', IDDLE_SPEED)
    }
} 
else if(this.MMovable.dir === DIR.DOWN) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Front';
    }
    else {
        playAnimation(this, 'Player_Move_Front', IDDLE_SPEED)
    }
}
else if(this.MMovable.dir === DIR.LEFT || this.MMovable.dir === DIR.RIGHT) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Side';
    }
    else {
        playAnimation(this, 'Player_Move_Side', IDDLE_SPEED)
    }
} 


this.MContainer.onDraw();