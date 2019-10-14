const POS = {
    title: { x: 1047, y: 350},
    firstB: { x: 1071, y: 750},
    secondB: { x: 1071, y: 975},
    thirdB: { x: 1071, y: 1195},
};

this.uiElements = [];

this.showStartingMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Menu", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Start", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Exit", POS.thirdB.x, POS.thirdB.y));
};

this.showGameMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Menu", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Restart", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Menu", POS.thirdB.x, POS.thirdB.y));
};

this.showWinMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Win", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Next", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Menu", POS.thirdB.x, POS.thirdB.y));
};

this.showLoseMenu = function () {
    if (uiElements.length > 0) {
        this.clearMenu();
    }
    this.uiElements.push(ct.types.make("UI_Lose", POS.title.x, POS.title.y));
    this.uiElements.push(ct.types.make("UI_Restart", POS.firstB.x, POS.firstB.y));
    this.uiElements.push(ct.types.make("UI_Select", POS.secondB.x, POS.secondB.y));
    this.uiElements.push(ct.types.make("UI_Menu", POS.thirdB.x, POS.thirdB.y));
};

this.clearMenu = function () {
    this.uiElements.foreach(function (el) {
        el.kill = true;
    });
    uiElements = [];
};
