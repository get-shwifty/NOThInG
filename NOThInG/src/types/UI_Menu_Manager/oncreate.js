const SCALE = Math.min(ct.viewWidth / 2142, ct.viewHeight / 1428);

this.scaling = function(el) {
    el.scale.x *= SCALE;
    el.scale.y *= SCALE;
    return el;
};

const POS = {
    title: { x: ct.viewWidth / 2, y: 350 * SCALE},
    firstB: { x: ct.viewWidth / 2, y: 750 * SCALE},
    secondB: { x: ct.viewWidth / 2, y: 975 * SCALE},
    thirdB: { x: ct.viewWidth / 2, y: 1195 * SCALE},
};

this.uiElements = [];
this.menuOn = function() {
    return this.uiElements.length > 0;
}

this.showModalBackground = function() {
    this.uiElements.push(ct.types.make("ModalBackground"));
};

this.showStartingMenu = function () {
    if (this.uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(this.scaling(ct.types.make("UI_Menu", POS.title.x, POS.title.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Start", POS.firstB.x, POS.firstB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Exit", POS.thirdB.x, POS.thirdB.y)));
    // PIXI.ticker.shared.speed = 0;
    // ct.pixiApp.ticker.speed = 0;
};

this.showLevelMenu = function () {
    if (this.uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Menu", POS.title.x, POS.title.y));
    
    let x = 0;
    let max_x =  (ct.viewWidth - 400) / TILE_SIZE;
    
    let initial_x = 200;
    let initial_y = 800;
    
    const rooms = Object.keys(ct.rooms.templates).sort().filter(e => NON_LEVEL_ROOMS.indexOf(e) === -1)
    rooms.forEach(room => {
        let coord_x = x % max_x;
        let coord_y = Math.floor(x / max_x);
        ct.types.copy("Level_Select_Button", (coord_x* TILE_SIZE) + initial_x, (coord_y*TILE_SIZE)+ initial_y) 
        x ++;
});

ct.types.list['Level_Select_Button'].forEach((button, index) => {
  button.setLevelName(rooms[index])
});
};

this.showGameMenu = function () {
    if (this.uiElements.length > 0) {
        this.clearMenu();
    }
    this.showModalBackground();
    this.uiElements[0].tint = 0x373737;
    this.uiElements.push(this.scaling(ct.types.make("UI_Menu", POS.title.x, POS.title.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Restart", POS.firstB.x, POS.firstB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Menu_Button", POS.thirdB.x, POS.thirdB.y)));
    // PIXI.ticker.shared.speed = 0;
    // ct.pixiApp.ticker.speed = 0;
};

this.showWinMenu = function () {
    if (this.uiElements.length > 0) {
        this.clearMenu();
    }
    this.showModalBackground();
    this.uiElements[0].tint = 0x224f22;
    this.uiElements.push(this.scaling(ct.types.make("UI_Win", POS.title.x, POS.title.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Next", POS.firstB.x, POS.firstB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Menu_Button", POS.thirdB.x, POS.thirdB.y)));
    // PIXI.ticker.shared.speed = 0;
    // ct.pixiApp.ticker.speed = 0;
};

this.showLoseMenu = function () {
    if (this.uiElements.length > 0) {
        this.clearMenu();
    }
    this.showModalBackground();
    this.uiElements[0].tint = 0x511313;
    this.uiElements.push(this.scaling(ct.types.make("UI_Lose", POS.title.x, POS.title.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Restart", POS.firstB.x, POS.firstB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y)));
    this.uiElements.push(this.scaling(ct.types.make("UI_Menu_Button", POS.thirdB.x, POS.thirdB.y)));
    // PIXI.ticker.shared.speed = 0;
    // ct.pixiApp.ticker.speed = 0;
};

this.clearMenu = function () {
    this.uiElements.forEach(function (el) {
        el.kill = true;
    });
    this.uiElements = [];
    // PIXI.ticker.shared.speed = 1;
    // ct.pixiApp.ticker.speed = 1;
};
