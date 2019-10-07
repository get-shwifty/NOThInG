MMovable(this, false);
MContainer(this, 4);
this.moving = false;
setInterval(() => {
    this.moving = !this.moving;
}, 3000)
// this.MContainer.addElementByType('G');