if (this.MTransmitter[SIGNAL.ELECTRICITY].isActive()) {
    this.body.core.tex = 'Reactor_Core_On';
    this.body.background.rotation += 0.035;
}else{
    this.body.core.tex = 'Reactor_Core_Off';
}
