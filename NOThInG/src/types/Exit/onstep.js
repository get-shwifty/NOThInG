if (ct.actions.Debug_Next_Level.pressed) {
    //this should be triggered by a collision with the player instead
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
    
    ct.types.make("UI_Menu", ct.viewWidth / 2, 3 * TILE_SIZE + (((270 * ct.viewWidth / 900) - 270) / 2));
    ct.types.make("UI_Restart", ct.viewWidth / 2, 6 * TILE_SIZE + ((((270 + 32) * ct.viewWidth / 900) - (270 + 32))));
    ct.types.make("UI_Select", ct.viewWidth / 2, 8 * TILE_SIZE + ((((270 + 32 + 64) * ct.viewWidth / 900) - (270 + 32 + 64))));
    ct.types.make("UI_Menu_Button", ct.viewWidth / 2, 10 * TILE_SIZE + ((((270 + 5 * 32) * ct.viewWidth / 900) - (270 + 5 * 32))));
}
