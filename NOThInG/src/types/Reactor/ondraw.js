if (this.MActivable.isActive()){
    if(this.core.texture !== ct.res.getTexture('Reactor_Core_On', 0)){
        this.core.texture = ct.res.getTexture('Reactor_Core_On', 0)
    }
    this.background.rotation += 0.035
    this.MActivable.activate(2);
}else{
    this.core.texture = ct.res.getTexture('Reactor_Core_Off', 0)
    this.MActivable.deactivate(2);
}