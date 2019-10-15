const MContainer = (self, maxSlots, elementsDisplayTemplate='default', shadowScale=1) => {
    MEvent(self);

    const objectsTypes = [];
    const pixiObjects = [];
    
    self.body = self.addChild(new ct.types.Copy());
    self.shadow = self.addChild(new ct.types.Copy());
    self.body.tex = self.tex
    self.tex = -1
    self.shadow.tex = 'Shadow';
    self.shadow.visible = false;
    let frameCount = 0;
    
    self.MContainer = {
        has(cst) {
            for(const el of objectsTypes) {
                if(el.MElement.getType() === cst) {
                    return true;
                }
            }
            return false;
        },
        addElement(other) {
            if(other && objectsTypes.length < maxSlots) {
                objectsTypes.push(other);
                other.kill = true;
                
                if (self.MEvent) {
                    self.MEvent.emit("elementTaken", other, objectsTypes);
                } else {
                    console.log("No MEvent Mixins, can't emit message 'elementTaken'");
                }
                if (other.MElement.getType().type === EL.G.type) {
                    self.depth = 1;
                }
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
        takeElement(dir) {
            let elInFront = utils.getNextDir(self, dir, "MElement");
            if(elInFront) {
                this.addElement(elInFront);
            }
            contInFront = utils.getNextDir(self, dir, "MContainer");
            if (contInFront) {
                if (this.hasFreeSlot()) {
                    let elDrop = contInFront.MContainer.popElement();
                    if (elDrop) {
                        this.addElement(elDrop);
                    }
                }
            }
        },
        popElement() {
            if (objectsTypes.length > 0) {
                let obj = objectsTypes.pop();
                if (self.MEvent) {
                    self.MEvent.emit("elementDropped", obj, objectsTypes);
                } else {
                    console.log("No MEvent Mixins, can't emit message 'elementTaken'");
                }
                if (!self.MContainer.has(EL.G)) {
                    self.depth = 0;
                }
                self.MContainer.updateView();
                return obj;
            }
            return null;
        },
        dropElement(dir) {
            if (objectsTypes.length === 0) {
                return false;
            }
            
            const contInFront = utils.getNextDir(self, dir, "MContainer");
            const zoneInFront = utils.getNextDir(self, dir, "MZone");
            const anyInFront = utils.getNextDir(self, dir);
            
            if (contInFront) {
                if(contInFront.MContainer.hasFreeSlot()) {
                   contInFront.MContainer.addElement(this.popElement());
                }
            } else if (zoneInFront) {
                const lastObject = objectsTypes[objectsTypes.length - 1];
                if(zoneInFront.MZone.canDrop(lastObject)) {
                    zoneInFront.MZone.drop(this.popElement());
                }
            } else if(!anyInFront) {
                utils.spawn(this.popElement().MElement.getType().type, self, dir);
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
                if(self.body !== undefined){
                    self.body.addChild(child);
                }
                else{
                    self.addChild(child)
                }
                pixiObjects.push(child);
                // TODO positions
            }
        },
        onDraw() {
            if (elementsDisplayTemplate === "list") {
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
            
            self.shadow.visible = false
            self.body.y = 0;
            if (self.MContainer.has(EL.G)) {
                self.body.y = -15*shadowScale + Math.sin(frameCount / (4*shadowScale)) * 2.5;
                self.shadow.visible = true;
                self.shadow.scale.x += Math.sin(frameCount / (4*shadowScale)) * 0.01;
                frameCount++;
            }
        }
        
    };
    self.MContainer.updateView();
};