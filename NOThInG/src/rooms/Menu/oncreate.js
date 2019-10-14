if (!ct.music && ct.sound.exists("music")) {
    ct.music = ct.sound.spawn("music",{loop : true});
}

this.menuManager = ct.types.make("UI_Menu_Manager");
this.menuManager.showStartingMenu();