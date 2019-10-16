const MTile = (self, baseSprite) => {
    self.tex = baseSprite
    
    const _getSprite = (matrix, n) => {
        let res = baseSprite
        if(n >= 3){
            return res
        }
        if(matrix[0][0] === 1 && matrix[2][0] === 0){
            res += '_top'
        }
        else if(matrix[0][0] === 0 && matrix[2][0] === 1){
            res += '_bottom'
        }
        if(matrix[1][0] === 1 && matrix[1][2] === 0){
            res += '_right'
        }
        else if(matrix[1][0] === 0 && matrix[1][2] === 1){
            res += '_left'
        }
        return res
    }

    const _getSpriteFromTiles = () => {
        let isSameType = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ]
        const arround = utils.getUnderDistance(self, 1)
        const own = self.type
        arround.forEach(obj => {
            const dx = utils.dx(self, obj) + 1;
            const dy = utils.dy(self, obj) + 1;
            if(obj.type === self.type){
                isSameType[dy][dx] = 1
            }
        })
        // clear corner since they won't interefeir in the choice of the sprite
        isSameType = [isSameType[0][1], isSameType[1], isSameType[2][1]]
        sameTypeCount = isSameType.map(tab => tab.filter(e => e === 1).length).filter(e => e === 1).length
        return _getSprite(isSameType, sameTypeCount)
    }

    self.MTile = {
        drawsSprite: _ => self.tex = _getSpriteFromTiles(),
    }
}