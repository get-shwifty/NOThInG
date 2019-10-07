if (ct.actions.Debug_Next_Level.pressed) {
    //this should be triggered by a collision with the player instead
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
    
    let background = ct.types.make("Wall", ct.viewWidth / 2, ct.viewHeight/2);
    background.scale.x = 40;
    background.scale.y = 40;
    background.depth = 0;
    background.alpha = 0.9;
    
    ct.types.make("UI_Win", ct.viewWidth / 2, 3 * 64 + (((270 * ct.viewHeight / 900) - 270) / 2));
    ct.types.make("UI_Next", ct.viewWidth / 2, 6 * 64 + ((((270 + 32) * ct.viewHeight / 900) - (270 + 32))));
    ct.types.make("UI_Select", ct.viewWidth / 2, 8 * 64 + ((((270 + 32 + 64) * ct.viewHeight / 900) - (270 + 32 + 64))));
    ct.types.make("UI_Menu_Button", ct.viewWidth / 2, 10 * 64 + ((((270 + 5 * 32) * ct.viewHeight / 900) - (270 + 5 * 32))));
}
