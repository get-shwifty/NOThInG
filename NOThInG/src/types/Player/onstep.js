if(ct.actions.Up.pressed) {
    if(this.MMovable.goUp()) {
        self.lastMove = DIR.UP;
        if (this.MAntiGravity){
            this.tex = 'Player_Back_Gravity';
        }else{
            this.tex = 'Player_Back';
        }
    }
} else if(ct.actions.Down.pressed) {
    if(this.MMovable.goDown()) {
        self.lastMove = DIR.DOWN;
        if (this.MAntiGravity){
            this.tex = 'Player_Front_Gravity';
        }else{
            this.tex = 'Player_Front';
        }
    }
} else if(ct.actions.Left.pressed) {
    if(this.MMovable.goLeft()) {
        self.lastMove = DIR.LEFT;
        if (this.MAntiGravity){
            this.tex = 'Player_Side_Gravity';
        }else{
            this.tex = 'Player_Side';
        }
        this.scale.x = -1;
    }
} else if(ct.actions.Right.pressed) {
    if(this.MMovable.goRight()) {
        self.lastMove = DIR.RIGHT;
        if (this.MAntiGravity){
            this.tex = 'Player_Side_Gravity';
        }else{
            this.tex = 'Player_Side';
        }
        this.scale.x = 1;
    }
} else if(ct.actions.Take.pressed) {

} else if(ct.actions.Drop.pressed) {

}

//if (this.MAntiGravity) {
//    
//}
