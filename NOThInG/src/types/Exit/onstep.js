if (getPlayer() && utils.distance(this, getPlayer()) === 0 && !getPlayer().menuManager.menuOn()) {
    ct.sound.spawn("victory");
    getPlayer().win = true;
    getPlayer().menuManager.showWinMenu();
}
