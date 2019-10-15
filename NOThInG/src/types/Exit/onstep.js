if (getPlayer() && utils.distance(this, getPlayer()) === 0 && !ct.room.menuManager.menuOn()) {
    ct.sound.spawn("victory");
    getPlayer().win = true;
    ct.room.menuManager.showWinMenu();
}
