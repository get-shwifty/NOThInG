const MMovable = (self, onlyOnGravity=false, checkOrientation=false) => {
    MEvent(self);
    
    const moves = [];
    
    const move = (dir) => {
        moves.push({
            dir,
            remainingFrames: ONE_STEP_FRAME,
            speed: TILE_SIZE / ONE_STEP_FRAME,
            direction: utils.getDirRotationDeg(dir),
            finalPos: utils.move(getFuturePos(), dir)
        });
    };
    
    const getFuturePos = () => {
        if(moves.length > 0) {
            return { x: moves[moves.length-1].finalPos.x, y: moves[moves.length-1].finalPos.y };
        } else {
            return { x: self.x, y: self.y };
        }
    };

    self.MMovable = {
        dir: DIR.DOWN,
        moving: false,
        onStep() {
            if(!self.MMovable.moving && moves.length > 0) {
                self.MMovable.moving = true;
                self.MEvent.emit('moveStart');
            }
            if(self.MMovable.moving) {
                const move = moves[0];

                move.remainingFrames -= ct.delta;
                if(move.remainingFrames <= 0) {
                    self.MMovable.dir = move.dir;
                    self.speed = 0;
                    self.x = move.finalPos.x;
                    self.y = move.finalPos.y;
                    moves.shift();
                    self.MEvent.emit('step');

                    if(self.MMovable.isAntiGravity()) {
                        self.MMovable.goAntiGravity(self.MMovable.dir); // Try to move again if in gravity
                    }

                    if(moves.length > 0) {
                        self.MMovable.onStep();
                    } else {
                        self.MMovable.moving = false;
                        self.MEvent.emit('moveEnd');
                    }
                } else {
                    self.speed = move.speed;
                    self.direction = move.direction;
                    self.move();
                }
            }
        },
        go(dir) {
            if(self.MMovable.moving) {
                return false;
            }
            if(onlyOnGravity && !self.MMovable.isAntiGravity()) {
                return false;
            }
            
            if(self.MMovable.dir !== dir) {
                self.MMovable.dir = dir;
                if(checkOrientation) {
                    return false;
                }
            }
            
            const other = self.MMovable.canGoDir(dir);
            if(other) {
                if(other !== true) {
                    if(self.MMovable.isAntiGravity()) {
                        return false;
                    }
                    if(other.MMovable.go(dir, false)) {
                        move(dir);
                        return true;
                    }
                } else {
                    move(dir);
                    return true;
                }
            }

            return false;
        },
        isAntiGravity() {
            return self.MContainer && self.MContainer.has(EL.G);
        },
        goAntiGravity(dir) {
            const other = self.MMovable.canGoDirGravity(dir);
            if(!other) { // player is blocked
                return false;
            } else if(other !== true) { // player is blocked by a gravity movable object
                other.MMovable.goAntiGravity(dir);
                return false;
            } else { // player can freely move
                move(dir);
                return true;
            }
        },
        
        /// Helpers
        
        canGoDir(dir) {
            if(utils.getNextDir(getFuturePos(), dir, 'MObstacle') ) {
                return false;
            }

            const movableObject = utils.getNextDir(getFuturePos(), dir, 'MMovable');
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
            const obstacle = utils.getNextDir(getFuturePos(), dir, 'MObstacle');
            if(obstacle && obstacle.MObstacle.obstacleInAntiGravity) {
                return false;
            }

            const movableObject = utils.getNextDir(getFuturePos(), dir, 'MMovable');
            if(movableObject) {
                if(movableObject.MMovable.isAntiGravity()) {
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