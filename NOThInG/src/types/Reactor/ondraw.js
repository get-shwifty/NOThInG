if (this.MActivable.isActive()){
    this.body.core.tex = 'Reactor_Core_On';
    this.body.background.rotation += 0.035
    this.MActivable.activate(2);
}else{
    this.body.core.tex = 'Reactor_Core_Off'
    this.MActivable.deactivate(2);
}

this.MContainer.onDraw("Reactor");