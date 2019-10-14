if (getPlayer() && utils.distance(this, getPlayer()) === 0 && !this.won) {
    this.won = true;
    ct.sound.spawn("victory");
    getPlayer().menuManager.showWinMenu();
}
