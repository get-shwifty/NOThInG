MMovable(this, false);
MContainer(this, 2);
this.animationSpeed = 0.08;
this.moving = false;
setInterval(() => {
    this.moving = !this.moving;
}, 3000)
// this.MContainer.addElementByType('G');
