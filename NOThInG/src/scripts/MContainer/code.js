
const MContainer = (() => {

    return (self, maxSlots) => {
        const objectsTypes = [];
        const pixiObjects = []
        
        self.MContainer = {
            addElement(other) {
                if(objectsTypes.length < maxSlots) {
                    objectsTypes.push(other.MElement.getType());
                    other.kill = true;
                    self.MContainer.updateView();
                }
            },
            addElementByType(type) {
                if(objectsTypes.length < maxSlots) {
                    objectsTypes.push(type);
                    self.MContainer.updateView();
                }
            },
            updateView() {
                for(const obj of pixiObjects) {
                    self.removeChild(obj);
                    obj.destroy();
                }
                pixiObjects.length = 0;
                
                for(const objType of objectsTypes) {
                    console.log(objType, ct.res.getTexture('El_' + objType, 0));
                    const child = new PIXI.Sprite(ct.res.getTexture('El_' + objType, 0));
                    // child.scale = 0.5; do not work
                    self.addChild(child);
                    pixiObjects.push(child);
                    // TODO positions
                }
            }
        };
        self.MContainer.updateView();
    };
})();