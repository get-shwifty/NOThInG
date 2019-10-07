
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