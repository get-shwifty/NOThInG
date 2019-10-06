function getTextureNameFromType(type) {
    return Object.values(EL).filter(el => el.type = type)[0].tex;
}


const MContainer =  (self, maxSlots) => {
    const objectsTypes = [];
    const pixiObjects = [];
    
    self.MContainer = {
        addElement(other) {
            if(objectsTypes.length < maxSlots) {
                objectsTypes.push(other);
                other.kill = true;
                self.MContainer.updateView();
            }
        },
        addElementByCst(cst) {
            if(objectsTypes.length < maxSlots) {
                objectsTypes.push(ct.types.make(cst.type));
                objectsTypes[objectsTypes.length - 1].kill = true;
                self.MContainer.updateView();
            }
        },
        updateView() {
            for(const obj of pixiObjects) {
                self.removeChild(obj);
                obj.destroy();
            }
            pixiObjects.length = 0;
            
            for(const obj of objectsTypes) {
                const child = new PIXI.Sprite(ct.res.getTexture((obj.MElement.getType()).tex, 0));
                child.scale.x = 0.4;
                child.scale.y = 0.4;
                self.addChild(child);
                pixiObjects.push(child);
                // TODO positions
            }
        },
        onDraw() {
            for(const [i, obj] of pixiObjects.entries()) {
                obj.scale.x = 0.4 / self.scale.x;
                obj.scale.y = 0.4 / self.scale.y;
                if(self.scale.x < 0) {
                    obj.x = TILE_SIZE / 2 + Math.abs(obj.scale.x) * TILE_SIZE * ( - 1/2 + i) ;
                    obj.y = - TILE_SIZE / 2 + Math.abs(obj.scale.y) * TILE_SIZE / 2;
                } else {
                    obj.x = - TILE_SIZE / 2 + Math.abs(obj.scale.x) * TILE_SIZE * (i + 1/2);
                    obj.y = - TILE_SIZE / 2 + Math.abs(obj.scale.y) * TILE_SIZE / 2;
                }
            }
        }
        
    };
    self.MContainer.updateView();
};