
const MMovable = (self, gravity) => {
    const move = (dir) => {
        utils.move(self, dir);
    };
        
    self.MMovable = {
        go(dir) {
            self.MMovable.dir = dir;
            if(self.MMovable.isAntiGravity()) {
                return self.MMovable.goAntiGravity(dir);
            }
            
            const other = self.MMovable.canGoDir(dir);
            if(other) {
                if(other !== true) {
                    other.MMovable.go(dir);
                }
                move(dir);
                
                return true;
            } else {
                return false;
            }
        },
        isAntiGravity() {
            return gravity;
        },
        goAntiGravity(dir, propagation=false) {
            self.MMovable.dir = dir;
            if(utils.getNextDir(self, dir, 'MObstacle')) {
                return false;
            }
            
            let hasSupport = false;
            const movableAntiGravityObjects = []
            for(const d of Object.values(DIR)) {
                if(d !== dir) {
                    if(utils.getNextDir(self, d, 'MObstacle')) {
                        hasSupport = true;
                    }
                    const movableObject = utils.getNextDir(self, d, 'MMovable');
                    if(movableObject) {
                        hasSupport = true;
                        if(!propagation && movableObject.MMovable.isAntiGravity()) {
                            movableAntiGravityObjects.push(movableObject);
                        }
                    }
                }
            }
            if(!propagation && !hasSupport) {
                return false;
            }
            
            
            let somethingMoved = false;
            while(true) {
                const other = self.MMovable.canGoDirGravity(dir);
                if(!other) { // player is blocked
                    break;
                } else if(other !== true) { // player is blocked by a gravity movable object
                    somethingMoved = true;
                    other.MMovable.goAntiGravity(dir, true);
                    break;
                } else { // player can freely move
                    somethingMoved = true;
                    move(dir);
                }
            }
            
            if(somethingMoved) {
                for(const obj of movableAntiGravityObjects) {
                    obj.MMovable.goAntiGravity(ANTI_DIR[dir], true);
                }
            }
            
            return somethingMoved;
        },
        
        /// Helpers
        
        canGoDir(dir) {
            if(utils.getNextDir(self, dir, 'MObstacle')) {
                return false;
            }
            
            const movableObject = utils.getNextDir(self, dir, 'MMovable');
            if(movableObject) {
                if(movableObject.MMovable.canGoDir(dir)) {
                    return movableObject;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        },
        canGoDirGravity(dir) {
            if(utils.getNextDir(self, dir, 'MObstacle')) {
                return false;
            }
            
            const movableObject = utils.getNextDir(self, dir, 'MMovable');
            if(movableObject) {
                if(movableObject.MMovable.isAntiGravity() && movableObject.MMovable.canGoDirGravity(dir)) {
                    return movableObject;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    };
};
