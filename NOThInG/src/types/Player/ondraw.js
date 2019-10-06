const playAnimation = function(obj, animName){
    if (obj.tex !== animName){
        obj.tex = animName;
        obj.play();
    }
}

if(this.MMovable.dir === DIR.UP) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Back';
    } else {
        playAnimation(this, 'Player_Iddle_Back')
    }
    this.scale.x = 1;
} else if(this.MMovable.dir === DIR.DOWN) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Play_Gravity_Front'
    } else {
        playAnimation(this, 'Player_Iddle_Front')
    }
    this.scale.x = 1;
} else if(this.MMovable.dir === DIR.LEFT) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Side';
    } else {
        playAnimation(this, 'Player_Iddle_Side')
    }
    this.scale.x = -1;
} else if(this.MMovable.dir === DIR.RIGHT) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Side';
    } else {
        playAnimation(this, 'Player_Iddle_Side')
    }
    this.scale.x = 1;
}