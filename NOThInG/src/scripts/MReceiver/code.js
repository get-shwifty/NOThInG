
/* behaviours:
 *   - 'every': all signals must be true to activate, one false deactivate
 *   - 'some': one signal must be true to activate, all false deactivate
 */
const MReceiver = (self, signal, behaviour='some', tff) => {
    MEvent(self);
    
    let active = false;
    const receivedSignals = new Set();
    
    self.MReceiver = self.MReceiver || {};
    self.MReceiver[signal] = {
        isActive() {
            return active;
        },
        onStep() {
            if(receivedSignals.size > 0) {
                let newActive;
                if(behaviour === 'some') {
                    newActive = receivedSignals.has(true);
                } else if(behaviour === 'every') {
                    newActive = !receivedSignals.has(false);
                } else {
                    throw 'unknow behaviour: ' + behaviour + ', must be "some" or "every".'
                }
                receivedSignals.clear();
                
                if(active !== newActive) {
                    active = newActive;
                    self.MEvent.emit('signal', signal, active);
                }
            }
        },
        receive(value) {
            receivedSignals.add(!!value);
        }
    }
    
    return self.MReceiver[signal];
} 