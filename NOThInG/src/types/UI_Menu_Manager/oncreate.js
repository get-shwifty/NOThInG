const POS = {
    title: { x: 1047, y: 350},
    firstB: { x: 1071, y: 750},
    secondB: { x: 1071, y: 975},
    thirdB: { x: 1071, y: 1195},
};

this.uiElements = [];

// let background = ct.types.make("Wall", ct.viewWidth / 2, ct.viewHeight/2);
// background.scale.x = 40;
// background.scale.y = 40;
// background.depth = 0;
// background.alpha = 0.9;

this.showStartingMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Menu", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Start", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Exit", POS.thirdB.x, POS.thirdB.y));
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
};

this.showGameMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Menu", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Restart", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Menu", POS.thirdB.x, POS.thirdB.y));
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
};

this.showWinMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Win", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Next", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Menu", POS.thirdB.x, POS.thirdB.y));
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
};

this.showLoseMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Lose", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Restart", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Menu", POS.thirdB.x, POS.thirdB.y));
    PIXI.ticker.shared.speed = 0;
    ct.pixiApp.ticker.speed = 0;
};

this.clearMenu = function () {
    this.uiElements.foreach(function (el) {
        el.kill = true;
    });
    uiElements = [];
    PIXI.ticker.shared.speed = 1;
    ct.pixiApp.ticker.speed = 1;
};
