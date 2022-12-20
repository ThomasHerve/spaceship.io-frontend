// App
let app;
let player = undefined;
let otherPlayers = {};

// Absolute arena size
width = 1000
height = 1000

// Spaceship position
x = 100
y = 100

function loadGame(){
    let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }
    app = new PIXI.Application({
        resizeTo: window,
        antialias: true   // default: false
      }
    );
    app.stage.updateLayersOrder = function () {
        app.stage.children.sort(function(a,b) {
            a.zIndex = a.zIndex || 0;
            b.zIndex = b.zIndex || 0;
            return a.zIndex - b.zIndex
        });
        };


    document.body.appendChild(app.view);
    
    // Add player spaceship
    player = PIXI.Sprite.from("assets/img/spaceship.png");
    app.stage.addChild(player);

    // Anchor it
    player.anchor.x = 0.5;
    player.anchor.y = 0.5

    // Size it and place it
    resize();
}

loadGame();

/**
 * Game logic
 */

//app.ticker.add(delta => gameLoop(delta));
/*function gameLoop(delta) {

}*/




/**
 * Graphic logic
 */

window.addEventListener('resize', (event)=>{
  resize();
})

function resize() {
  // Values
  spaceshipSize = window.innerHeight / 10;

  // Player
  player.height = spaceshipSize;
  player.width = spaceshipSize;
  player.y = window.innerHeight / 2
  player.x = window.innerWidth /2;

  // Other players

  // Shoots

}

/**
 * Function which take the position in world position and convert it to the screen
 */
function aboslutePositionToScreen(x, y) {

}

/* UTILS
    ajouter un sprite : app.stage.addChild(anySprite);
    retirer un sprite : app.stage.removeChild(anySprite)
    changer sa visibilité : anySprite.visible = false;
    changer sa position : sprite.x = valeur, sprite.y = valeur
    changer sa taille : sprite.height = valeur, sprite.width = valeur;
    changer son scale : sprite.scale.x = percentage
    changer sa rotation :  sprite.rotation = 0.5;
    mettre l'ancre au centre : sprite.anchor.x = 0.5; sprite.anchor.y = 0.5; OU sprite.anchor.set(x, y)


    //valeurs
    hauteur : app.stage.height
    largeur : app.stage.width
*/
