const MContainer =  (self, maxSlots) => {
    const objectsTypes = [];
    const pixiObjects = [];
    
    self.MContainer = {
        addElement(other) {
            if(other && objectsTypes.length < maxSlots) {
                if (self.MEvent) {
                    self.MEvent.emit("elementTaken", other);
                } else {
                    console.log("No MEvent Mixins, can't emit message 'elementTaken'");
                }
                objectsTypes.push(other);
                other.kill = true;
                self.MContainer.updateView();
                return true;
            }
            return false;
        },
        addElementByCst(cst) {
            if(objectsTypes.length < maxSlots) {
                this.addElement(ct.types.make(cst.type));
            }
            return false;
        },
        popElement() {
            if (objectsTypes.length > 0) {
                let obj = objectsTypes.pop();
                if (self.MEvent) {
                    self.MEvent.emit("elementDropped", obj, objectsTypes);
                } else {
                    console.log("No MEvent Mixins, can't emit message 'elementTaken'");
                }
                self.MContainer.updateView();
                return obj;
            }
            return null;
        },
        dropElement(dir) {
            let objInFront = utils.getNextDir(self, dir);
            if (objInFront && objInFront.MContainer && objInFront.MContainer.hasFreeSlot()) {
                let elDrop = this.popElement();
                if (elDrop) {
                    objInFront.MContainer.addElement(elDrop);
                }
            } else if (!objInFront) {
                let elDrop = this.popElement();
                if (elDrop) {
                    let newEl = ct.types.make(elDrop.MElement.getType().type, self.x, self.y);
                    utils.move(newEl, dir);
                }
            }
        },
        hasFreeSlot() {
            return objectsTypes.length < maxSlots;
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
                    obj.x = TILE_SIZE / 2 - Math.abs(obj.scale.x) * TILE_SIZE * ( i + 0.5);
                    obj.y = - TILE_SIZE / 2 + Math.abs(obj.scale.y) * TILE_SIZE / 2;
                } else {
                    obj.x = - TILE_SIZE / 2 + Math.abs(obj.scale.x) * TILE_SIZE * (i + 0.5);
                    obj.y = - TILE_SIZE / 2 + Math.abs(obj.scale.y) * TILE_SIZE / 2;
                }
            }
        }
        
    };
    self.MContainer.updateView();
};