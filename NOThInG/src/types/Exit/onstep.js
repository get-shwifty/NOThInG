if (ct.actions.Debug_Next_Level.pressed) {
    //this should be triggered by a collision with the player instead    
    
    const rooms = Object.keys(ct.rooms.templates).sort().filter(e => NON_LEVEL_ROOMS.indexOf(e) === -1)
    let index = rooms.indexOf(ct.room.name)
    
    if(index+1 >= rooms.length){
        ct.rooms.switch("Final_Screen")
    }else{
        ct.rooms.switch(rooms[index+1])
    }
}
