if (this.MActivable.isActive()){
    this.tex = 'Reactor_On';
    this.MActivable.activate(2);
}else{
    this.tex = 'Reactor_Off';
    this.MActivable.deactivate(2);
}