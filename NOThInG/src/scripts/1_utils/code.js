
const utils = {
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
        for(const b of ct.room.children) {
            if(utils.isNextDir(a, b, dir) && (prop === undefined || b[prop])) {
                return b;
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