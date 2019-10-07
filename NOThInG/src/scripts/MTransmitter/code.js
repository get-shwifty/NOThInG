
const MTransmitter = (self, signal, distance) => {
    MEvent(self);
    
    let active = false;

    self.MTransmitter = self.MTransmitter || {};
    self.MTransmitter[signal] = {
        activate() {
            active = true;
            self.MEvent.emit('change', true);
        },
        deactivate() {
            active = false;
            self.MEvent.emit('change', false);
        },
        isActive() {
            return active;
        },
        onStep() {
            for(const el of utils.getUnderDistance(self, distance, 'MReceiver')) {
                if(el.MReceiver[signal]) {
                    el.MReceiver[signal].receive(active);
                }
            }
        }
    }
    
    return self.MTransmitter[signal];
} 