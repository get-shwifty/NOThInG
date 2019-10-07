const receiver = MReceiver(this, SIGNAL.ELECTRICITY, 'some');
MObstacle(this, true);

this.MEvent.on('change', opened => {
    // change behaviour
    if (opened) {
        delete this.MObstacle;
    } else {
        MObstacle(this, true);
    }
    
    // Change display
    if (opened) {
        playAnimation(this, 'Porte_Ouverture', 0.15)
        this.loop = false;
    } else {
        playAnimation(this, 'Porte_Fermeture', 0.15)
        this.loop = false;
    }
});

