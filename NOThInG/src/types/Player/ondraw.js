const playAnimation = function(obj, animName){
    if (obj.tex !== animName){
        obj.tex = animName;
        obj.play();
    }
}

this.animationSpeed = 0.04
this.scale.x = this.MMovable.dir === DIR.LEFT ? -1: 1;

if(this.MMovable.dir === DIR.UP) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Back';
    }
    else if(this.moving){
        this.animationSpeed = 0.3
        playAnimation(this, 'Player_Move_Back')
    } else {
        playAnimation(this, 'Player_Iddle_Back')
    }
} 
else if(this.MMovable.dir === DIR.DOWN) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Play_Gravity_Front'
    }
    else if(this.moving){
        this.animationSpeed = 0.3
        playAnimation(this, 'Player_Move_Front')
    } 
    else {
        playAnimation(this, 'Player_Iddle_Front')
    }
} 
else if(this.MMovable.dir === DIR.LEFT || this.MMovable.dir === DIR.RIGHT) {
    if (this.MMovable.isAntiGravity()) {
        this.tex = 'Player_Gravity_Side';
    }
    else if(this.moving){
        this.animationSpeed = 0.3
        playAnimation(this, 'Player_Move_Side')
    } 
    else {
        playAnimation(this, 'Player_Iddle_Side')
    }
} 