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
    var textureFiles = ["img/fens.jpg", "img/floor2.jpg", "img/sky.png", "img/cont_b.png", "img/cont_r.png",
                        "img/wall_bunkpng.png", "img/wall_portjpg.jpg", "img/ceil_1.jpg", "img/ground2.jpg", "img/ground2.jpg",
                         "img/wall_bunkpng.png", "img/boom.png","img/tank3_fire.png","img/tank5_fire.png","img/tank_end3.png", "img/tank_start1.png", "img/tank_end4.png",
                         "img/tank_start.png", "img/tank_end.png","img/tank6.png", "img/tank5.png", "img/tank3.png"];
    raycast.texture.initiateLoad(textureFiles, raycast.engine.start);
};
  
window.onload = start;