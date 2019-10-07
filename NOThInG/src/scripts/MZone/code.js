
const MZone = (self, types, callback) => {

    self.MZone = {
        canDrop(el) {
            return types === 'all' || types.indexOf(el.MElement.getType()) >= 0;
        },
        drop(el) {
            if(this.canDrop(el)) {
                callback(el);
            }
        },
        onStep() {
            for(const el of utils.getUnderDistance(self, 0, 'MElement')) {
                this.drop(el);
            }
        }
    }
}