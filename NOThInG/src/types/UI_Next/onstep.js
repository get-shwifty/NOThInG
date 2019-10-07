if (ct.mouse.pressed) {
    if (ct.mouse.hovers(this)) {
        PIXI.ticker.shared.speed = 1;
        ct.pixiApp.ticker.speed = 1;
        if (this.nextRoom) {
            ct.rooms.switch(this.nextRoom);
        } else {
            console.log("WIIIIIIIIN");
        }
    }
}

