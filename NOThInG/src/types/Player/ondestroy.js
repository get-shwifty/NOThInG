// Add death animation (drowning, radioactive mushroom growing, suffocating)
// increase the delay for Menu appearance accoridng to animation length

setTimeout(() => {
    ct.sound.spawn("defeat")
    ct.room.menuManager.showLoseMenu();
    
}, 100);