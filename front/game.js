var raycast = raycast || {};

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(callback, element){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function start() {
    document.onkeyup = raycast.keyhandler.onKeyup;
    document.onkeydown = raycast.keyhandler.onKeydown;
    var textureFiles = ["img/fens.jpg", "img/floor_s.jpg", "img/sky2.png", "img/home_1.jpg", "img/wood.jpg",
                        "img/wall_green.jpg", "img/wall_bunker.jpg", "img/ceil_1.jpg", "img/ground.png", "img/ground2.jpg",
                         "img/wall_white_lom.jpg", "img/boom.png","img/tank3_fire.png","img/tank5_fire.png","img/tank_end3.png", "img/tank_start1.png", "img/tank_end4.png",
                         "img/tank_start.png", "img/tank_end.png","img/tank6.png", "img/tank5.png", "img/tank3.png"];
    raycast.texture.initiateLoad(textureFiles, raycast.engine.start);
};
  
window.onload = start;