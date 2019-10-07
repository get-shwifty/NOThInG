
const getPlayer = () => {
    return ct.types.list.Player[0];
};

const utils = {
    spawn(el, pos, dir) {
        const newEl = ct.types.make(el, pos.x, pos.y);
        if(dir) {
            this.move(newEl, dir);
        }
        return newEl;
    },
    move: (el, dir) => {
        if(dir === DIR.UP) {
            el.y -= TILE_SIZE;
        } else if(dir === DIR.DOWN) {
            el.y += TILE_SIZE;
        } else if(dir === DIR.LEFT) {
            el.x -= TILE_SIZE;
        } else if(dir === DIR.RIGHT) {
            el.x += TILE_SIZE;
        }
        return el;
    },
    getDirRotationDeg: (dir) => {
        if(dir === DIR.UP) {
            return 90;
        } else if(dir === DIR.DOWN) {
            return 270;
        } else if(dir === DIR.LEFT) {
            return 180;
        } else if(dir === DIR.RIGHT) {
            return 0;
        }
    },
    distance: (a, b) => {
        return Math.abs(utils.dx(a, b)) + Math.abs(utils.dy(a, b));
    },
    dx: (a, b) => {
        return Math.round((b.x - a.x) / TILE_SIZE);
    },
    dy: (a, b) => {
        return Math.round((b.y - a.y) / TILE_SIZE);
    },
    isNextDir: (a, b, dir) => {
        if(dir === DIR.UP) {
            return utils.dx(a, b) === 0 && utils.dy(a, b) === -1;
        } else if(dir === DIR.DOWN) {
            return utils.dx(a, b) === 0 && utils.dy(a, b) === +1;
        } else if(dir === DIR.LEFT) {
            return utils.dx(a, b) === -1 && utils.dy(a, b) === 0;
        } else if(dir === DIR.RIGHT) {
            return utils.dx(a, b) === +1 && utils.dy(a, b) === 0;
        } else {
            throw 'bad dir: ' + dir;
        }
    },
    getNextDir: (a, dir, prop) => {
        if(prop && !Array.isArray(prop)) {
            prop = [prop];
        }
        
        for(const b of ct.room.children) {
            if(utils.isNextDir(a, b, dir)) {
                if(prop) {
                    for(const p of prop) {
                        if(b[p]) {
                            return b;
                        }
                    }
                } else {
                    return b;
                }
            }
        }
        
        return false;
    },
    getUnderDistance: (a, dist, prop) => {
        const res = [];
        for(const b of ct.room.children) {
            if(a === b) {
                continue;
            }
            if(utils.distance(a, b) <= dist && (prop === undefined || b[prop])) {
                res.push(b);
            }
        }
        
        return res;
    }
};