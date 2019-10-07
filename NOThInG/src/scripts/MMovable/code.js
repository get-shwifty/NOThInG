const MMovable = (self, gravity) => {
    MEvent(self);
    
    const moves = [];
    
    const move = (dir) => {
        moves.push({
            remainingFrames: ONE_STEP_FRAME,
            speed: TILE_SIZE / ONE_STEP_FRAME,
            direction: utils.getDirRotationDeg(dir),
            finalPos: utils.move(getFuturePos(), dir)
        });
        self.MMovable.moving = true;
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
            if(self.MMovable.moving) {
                const move = moves[0];
                
                move.remainingFrames -= ct.delta;
                if(move.remainingFrames <= 0) {
                    self.speed = 0;
                    self.x = move.finalPos.x;
                    self.y = move.finalPos.y;
                    moves.shift();
                    self.MEvent.emit('step');
                    if(moves.length === 0) {
                        self.MMovable.moving = false;
                        self.MEvent.emit('endMoving');
                    } else {
                        self.MMovable.onStep();
                    }
                } else {
                    self.speed = move.speed;
                    self.direction = move.direction;
                }
            }
        },
        go(dir) {
            if(self.MMovable.isAntiGravity()) {
                return self.MMovable.goAntiGravity(dir);
            }
            
            if(self.MMovable.moving) {
                return false;
            }
            self.MMovable.dir = dir;
            
            const other = self.MMovable.canGoDir(dir);
            if(other) {
                if(other !== true) {
                    other.MMovable.go(dir);
                } else {
                    move(dir);
                }
                
                return true;
            } else {
                return false;
            }
        },
        isAntiGravity() {
            return gravity;
        },
        goAntiGravity(dir, propagation=false) {
            if(!propagation && self.MMovable.moving) {
                return false;
            }
            
            self.MMovable.dir = dir;
            
            // let hasSupport = false;
            // const movableAntiGravityObjects = []
            // for(const d of Object.values(DIR)) {
            //     if(d !== dir) {
            //         if(utils.getNextDir(getFuturePos(), d, 'MObstacle')) {
            //             hasSupport = true;
            //         }
            //         const movableObject = utils.getNextDir(getFuturePos(), d, 'MMovable');
            //         if(movableObject) {
            //             hasSupport = true;
            //             if(!propagation && movableObject.MMovable.isAntiGravity()) {
            //                 movableAntiGravityObjects.push(movableObject);
            //             }
            //         }
            //     }
            // }
            // if(!propagation && !hasSupport) {
            //     return false;
            // }
            
            let somethingMoved = false;
            for(let k = 0; k < 50; k++) {
                const other = self.MMovable.canGoDirGravity(dir);
                if(!other) { // player is blocked
                    break;
                } else if(other !== true) { // player is blocked by a gravity movable object
                    if(self.MMovable.moving) {
                        self.MEvent.once('endMoving', () => {
                            other.MMovable.goAntiGravity(dir, true);
                        });
                    } else {
                        other.MMovable.goAntiGravity(dir, true);
                    }
                    break;
                } else { // player can freely move
                    somethingMoved = true;
                    move(dir);
                }
            }
            
            // if(somethingMoved) {
            //     for(const obj of movableAntiGravityObjects) {
            //         obj.MMovable.goAntiGravity(ANTI_DIR[dir], true);
            //     }
            // }
            
            return somethingMoved;
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