MMovable(this);
MContainer(this, 3);
this.tex = 'Porte_Ouverte'
this.body = this.addChild(new ct.types.Copy())
this.shadow = this.addChild(new ct.types.Copy())
this.shadow.tex = 'Shadow'
this.body.tex = 'Box'
this.count = 0