
const MMovable = (() => {
    const getMovableNear = (self, dir) => {
        return utils.getNextDir(self, dir, 'MMovable');
    };
    const hasObstacleNear = (self, dir) => {
        return utils.getNextDir(self, dir, 'MObstacle').length > 0;
    };
    const canGoDir = (self, dir) => {
        if(hasObstacleNear(self, dir)) {
            return false;
        }
        const arr = [];
        for(const movableObject of getMovableNear(self, dir)) {
            if(!canGoDir(movableObject, dir)) {
                return false;
            } else {
                arr.push(movableObject);
            }
        }
        return arr;
    };
    
    return (self) => {
        self.MMovable = {
            goUp: () => {
                const others = canGoDir(self, DIR.UP);
                if(others) {
                    for(const other of others) {
                        other.MMovable.goUp();
                    }
                    self.y -= TILE_SIZE;
                    
                    return true;
                } else {
                    return false;
                }
            },
            goDown: () => {
                const others = canGoDir(self, DIR.DOWN);
                if(others) {
                    for(const other of others) {
                        other.MMovable.goDown();
                    }
                    self.y += TILE_SIZE;
                    
                    return true;
                } else {
                    return false;
                }
            },
            goLeft: () => {
                const others = canGoDir(self, DIR.LEFT);
                if(others) {
                    for(const other of others) {
                        other.MMovable.goLeft();
                    }
                    self.x -= TILE_SIZE;
                    
                    return true;
                } else {
                    return false;
                }
            },
            goRight: () => {
                const others = canGoDir(self, DIR.RIGHT);
                if(others) {
                    for(const other of others) {
                        other.MMovable.goRight();
                    }
                    self.x += TILE_SIZE;
                    
                    return true;
                } else {
                    return false;
                }
            }
        };
    }
})();
