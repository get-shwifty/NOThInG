 const MActivable = (self,active, dist) =>{
    MObstacle(self);
    self.MActivable = {
        deactivate() {
            active = false;
            for(const obj of utils.getUnderDistance(self, dist, 'MOpenable')) {
                obj.MOpenable.close();
            }
        },
        activate(){
            active = true;
            for(const obj of utils.getUnderDistance(self, dist, 'MOpenable')) {
                obj.MOpenable.open();
            }
        },
        isActive(){
            return active;
        }
    }
    setTimeout(() => {
        if (active) {
            self.MActivable.activate();
        } else {
            self.MActivable.deactivate();
        }
    }, 0);
} 