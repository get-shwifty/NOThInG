if (this.MTransmitter[SIGNAL.ELECTRICITY].isActive()) {
    if(this.core.texture !== ct.res.getTexture('Reactor_Core_On', 0)){
        this.core.texture = ct.res.getTexture('Reactor_Core_On', 0)
    }
    this.background.rotation += 0.035
} else {
    this.core.texture = ct.res.getTexture('Reactor_Core_Off', 0)
}