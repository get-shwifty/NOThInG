
const MTransmitter = (self, signal, distance) => {
    MEvent(self);
    
    let active = false;

    self.MTransmitter = self.MTransmitter || {};
    self.MTransmitter[signal] = {
        activate() {
            active = true;
        },
        deactivate() {
            active = false;
        },
        isActive() {
            return active;
        },
        onStep(force) {
            for(const el of utils.getUnderDistance(self, distance, 'MReceiver')) {
                if(el.MReceiver[signal]) {
                    if(force) el.MReceiver[signal].onStep();
                    el.MReceiver[signal].receive(active);
                    if(force) el.MReceiver[signal].onStep();
                }
            }
        }
    }
    
    return self.MTransmitter[signal];
} 