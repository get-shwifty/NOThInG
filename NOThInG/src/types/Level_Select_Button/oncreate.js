this.levelName = "None"

this.setLevelName = inLevelName => {
    this.levelName = inLevelName
    
    this.text = this.addChild(new PIXI.Text(this.levelName))
}
