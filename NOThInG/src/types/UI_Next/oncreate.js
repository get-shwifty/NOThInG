const rooms = Object.keys(ct.rooms.templates).sort().filter(e => NON_LEVEL_ROOMS.indexOf(e) === -1)
let index = rooms.indexOf(ct.room.name)
this.nextRoom = rooms[index+1];