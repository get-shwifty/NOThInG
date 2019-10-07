
const MTransceiver = (self, signal, distance, behaviour) => {
    MReceiver(self, signal, behaviour);
    const transmitter = MTransmitter(self, signal, distance);
    
    self.MEvent.on('signal', (receivedSignal, value) => {
        if(receivedSignal === signal) {
            if(value) {
                transmitter.activate();
            } else {
                transmitter.deactivate();
            }
        }
    });
};

const deleteMTransceiver = (self, signal) => {
    delete self.MReceiver[signal];
    self.MTransmitter[signal].deactivate();
    self.MTransmitter[signal].onStep(true);
    delete self.MTransmitter[signal];
};