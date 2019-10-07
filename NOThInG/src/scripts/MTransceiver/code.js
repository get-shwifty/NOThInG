
const MTransceiver = (self, signal) => {
    if(!self.MTransmitter || !self.MTransmitter[signal]) {
        throw "need MTransmitter"
    }
    if(!self.MReceiver || !self.MReceiver[signal]) {
        throw "need MReceiver"
    }
    
    
};