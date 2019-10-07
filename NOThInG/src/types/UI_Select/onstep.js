if (ct.mouse.pressed) {
    if (ct.mouse.hovers(this)) {
        PIXI.ticker.shared.speed = 1;
        ct.pixiApp.ticker.speed = 1;
        ct.rooms.switch('Menu_Level_Select');
    }
}