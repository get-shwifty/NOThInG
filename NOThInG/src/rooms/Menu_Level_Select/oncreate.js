let x = 0;
let max_x =  5;

let initial_x = 850;
let initial_y = 750;



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

