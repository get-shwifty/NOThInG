if (ct.mouse.pressed) {
    if (ct.mouse.hovers(this)) {
        if (this.nextRoom) {
            ct.rooms.switch(this.nextRoom);
        } else {
            ct.types.make("End");
        }
    }
}

