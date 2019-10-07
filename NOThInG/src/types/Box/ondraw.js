this.MContainer.onDraw();

this.shadow.visible = false
this.body.y = 0
if (this.MMovable.isAntiGravity()) {
    this.body.y = -30 + Math.sin(this.count / 8) * 2.5;
    this.shadow.visible = true
    this.shadow.scale.x -= Math.sin(this.count / 8) * 0.02
    this.count++
}