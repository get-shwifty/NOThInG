if (ct.actions.Restart.pressed) {
    this.clearMenu();
    ct.rooms.switch(ct.room.name);
}

if (ct.actions.Menu.pressed) {
    if (!this.menuOn()) {
        this.showGameMenu();
    } else if (this.gameMenuOn) {
        this.clearMenu();
    }
}