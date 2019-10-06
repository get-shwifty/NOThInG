
const MMovable = (self) => {
    self.MMovable = {
        goUp() {
            const other = self.MMovable.canGoDir(DIR.UP);
            if(other) {
                if(other !== true) {
                    other.MMovable.goUp();
                }
                self.y -= TILE_SIZE;
                
                return true;
            } else {
                return false;
            }
        },
        goDown() {
            const other = self.MMovable.canGoDir(DIR.DOWN);
            if(other) {
                if(other !== true) {
                    other.MMovable.goDown();
                }
                self.y += TILE_SIZE;
                
                return true;
            } else {
                return false;
            }
        },
        goLeft() {
            const other = self.MMovable.canGoDir(DIR.LEFT);
            if(other) {
                if(other !== true) {
                    other.MMovable.goLeft();
                }
                self.x -= TILE_SIZE;
                
                return true;
            } else {
                return false;
            }
        },
        goRight() {
            const other = self.MMovable.canGoDir(DIR.RIGHT);
            if(other) {
                if(other !== true) {
                    other.MMovable.goRight();
                }
                self.x += TILE_SIZE;
                
                return true;
            } else {
                return false;
            }
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
        }
    };
};
