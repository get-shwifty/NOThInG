if (ct.actions.Debug_Next_Level.pressed) {
    //this should be triggered by a collision with the player instead
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
    ct.types.make("UI_Menu", ct.viewWidth / 2, SPLASH_POS.UI_Menu.y);
    ct.types.make("UI_Next", ct.viewWidth / 2, SPLASH_POS.First_Box.y);
    ct.types.make("UI_Select", ct.viewWidth / 2, SPLASH_POS.Second_Box.y);
    ct.types.make("UI_Menu_Button", ct.viewWidth / 2, SPLASH_POS.Third_Box.y);
}
