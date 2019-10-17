MTile(this, 'water')
this.wave = this.addChild(new ct.types.Copy())
this.wave.tex = Math.random() > 0.5 ? 'Wave1' : 'Wave2'
this.count = 0;
this.scale.x = 1.02;
this.scale.y = 1.02;