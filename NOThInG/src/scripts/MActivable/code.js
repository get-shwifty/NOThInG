 const MActivable = (self,active) =>{
    MObstacle(self);
    self.MActivable = {
        deactivate(dist) {
            active = false;
            for(const obj of utils.getUnderDistance(self, dist, 'MOpenable')) {
                obj.MOpenable.close();
            }
        },
        activate(dist){
            active = true;
            for(const obj of utils.getUnderDistance(self, dist, 'MOpenable')) {
                obj.MOpenable.open();
            }
        },
        isActive(){
            return active;
        }
    }
    
    
} 