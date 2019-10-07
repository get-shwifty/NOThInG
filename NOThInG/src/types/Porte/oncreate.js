const receiver = MReceiver(this, SIGNAL.ELECTRICITY, 'some', 'PORTE');
MObstacle(this, true);

this.MEvent.on('signal', (signal, opened) => {
    ct.sound.spawn('door')
    
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

