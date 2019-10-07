
const MEvent = (self) => {
    if(self.MEvent) {
        return;
    }
    const events = {};
    
    self.MEvent = {
        emit(event) {
            var args = [].slice.call(arguments, 1);
            // Array.prototype.call() returns empty array if context is not array-like
            ;[].slice.call(events[event] || []).filter((i) => {
                i.apply(self, args);
            });
        },
        on(event, cb) {
            if (typeof cb !== 'function') {
                throw new Error('Listener must be a function', typeof cb);
            }
            
            (events[event] = events[event] || []).push(cb);
            
            return () => {
                events[event] = events[event].filter((i) => {
                    return i !== cb;
                });
            };
        },
        once(event, cb) {
            const unbind = self.MEvent.on(event, () => {
                unbind();
                cb.apply(self, arguments);
            });
            
            return unbind;
        }
    };
};
