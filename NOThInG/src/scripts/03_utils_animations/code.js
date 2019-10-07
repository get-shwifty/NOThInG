/* Use scripts to define frequent functions and import small libraries */
const playAnimation = function(obj, animName, animSpeed){
    if (obj.tex !== animName){
        obj.animationSpeed = animSpeed
        obj.tex = animName;
        obj.play();
    }
}