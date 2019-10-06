
const MReactive = (self, callback) => {
    self.MReactive = {
        receive(el) {
            callback(el);
        }
    }
};