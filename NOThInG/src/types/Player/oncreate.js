MMovable(this, true);
MContainer(this, 4);
<<<<<<< HEAD

this.MEvent.on('moveStart', () => {
    console.log("moveStart");
});
this.MEvent.on('moveEnd', () => {
    console.log("moveEnd");
});
=======
// hack for empty sprite
this.tex = 'Porte_Ouverte'
this.body = this.addChild(new ct.types.Copy())
this.shadow = this.addChild(new ct.types.Copy())
this.shadow.tex = 'Shadow'
this.count = 0
// this.MContainer.addElementByType('G');
>>>>>>> b25433e5026ecbe25ac4b31bccd328993b595b89
