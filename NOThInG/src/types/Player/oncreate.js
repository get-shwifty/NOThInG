MMovable(this);
MContainer(this, 4);
// hack for empty sprite
this.tex = 'Porte_Ouverte'
this.body = this.addChild(new ct.types.Copy())
this.shadow = this.addChild(new ct.types.Copy())
this.shadow.tex = 'Shadow'
this.count = 0
// this.MContainer.addElementByType('G');
