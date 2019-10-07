/* Use scripts to define frequent functions and import small libraries */

const TILE_SIZE = 119;
const ONE_STEP_FRAME = 5;

const DIR = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
};

const ANTI_DIR = {
    UP: 'DOWN',
    DOWN: 'UP',
    LEFT: 'RIGHT',
    RIGHT: 'LEFT'
};

const EL = {
    G:{
        tex: "El_G",
        type: "El_Anti_Gravity"
    },
    Th:{
        tex: "El_Th",
        type: "El_Thorium"
    },
    O:{
        tex: "El_O",
        type: "El_Oxygen"
    },
};

const SIGNAL = {
    ELECTRICITY: 'ELECTRICITY'
};

const NON_LEVEL_ROOMS = ["Menu", "Menu_Level_Select", "Final_Screen"];
