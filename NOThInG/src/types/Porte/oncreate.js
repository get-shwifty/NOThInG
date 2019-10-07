const receiver = MReceiver(this, SIGNAL.ELECTRICITY, 'some');

const onChange = opened => {
    // change behaviour
    if (opened) {
        delete this.MObstacle;
    } else {
        MObstacle(this, true);
    }
    
    // Change display
    if (opened){
        this.tex = 'Porte_Ouverture';
        this.play();
    } else {
        this.tex = 'Porte_Fermee';
    }
};

this.MEvent.on('change', onChange);
onChange(receiver.isActive());