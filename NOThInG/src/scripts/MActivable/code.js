 const MActivable = (self,active) =>{
    MObstacle(self);
    self.MActivable = {
        deactivate() {
            active = false;
        },
        activate(){
            active = true;
        },
        isActive(){
            return active;
        }
    }
    
    
} 