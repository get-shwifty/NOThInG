
const roomOnStep = () => {
    for(const el of ct.room.children) {
        if(el.MMovable) {
            el.MMovable.onStep();
        }
        if(el.MZone) {
            el.MZone.onStep();
        }
        if(el.MTransmitter) {
            for(const sub of Object.values(el.MTransmitter)) {
                sub.onStep();
            }
        }
        if(el.MReceiver) {
            for(const sub of Object.values(el.MReceiver)) {
                sub.onStep();
            }
        }
    }
};

const roomOnDraw = () => {
    for(const el of ct.room.children) {
        if(el.MContainer) {
            el.MContainer.onDraw();
        }
    }
};