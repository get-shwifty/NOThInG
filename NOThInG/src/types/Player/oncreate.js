MMovable(this, true);
MContainer(this, 4);

this.MEvent.on('moveStart', () => {
    console.log("moveStart");
});
this.MEvent.on('moveEnd', () => {
    console.log("moveEnd");
});