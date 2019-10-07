this.levelName = "None"

this.setLevelName = inLevelName => {
    this.levelName = inLevelName
    
    this.text = this.addChild(new PIXI.Text(this.levelName, ct.styles.get('level_select_text')))
    this.text.x -= 25
    this.text.y -= 25
}
