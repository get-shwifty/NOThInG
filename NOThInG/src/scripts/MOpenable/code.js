const MOpenable = (self,opened) =>{
    if (!opened) {
        MObstacle(self);
    }
    self.MOpenable = {
        open() {
            opened = true;
            delete self.MObstacle;
        },
        close(){
            opened = false;
            MObstacle(self);
        },
        isOpen(){
            return opened;
        }
    }
} 