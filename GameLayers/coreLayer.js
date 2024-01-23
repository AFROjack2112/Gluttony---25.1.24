import { canvas, canvasContext } from "./canvasLayer.js";
import { PlayerFigure } from "../GameObjects/playerFigure.js";
import { applyPhysics } from "../physics.js";
import { camera } from "../script.js";
import { myRequest } from "../script.js";
import { animateBackgroundCanvas } from "../GameObjects/backgroundCanvas.js";

const targetFPS = 60;
const timeStep = 1000 / targetFPS; // in milliseconds

let gameObjects = [];

let backgroundImage = new Image();
backgroundImage.src = './images/backgroundnewred.png';

let lastTimestamp = 0;
let accumulatedTime = 0;

function gameLoop(timestamp) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    accumulatedTime += deltaTime;

    // Update the game at fixed intervals
    while (accumulatedTime >= timeStep) {
        updateGameLoop();
        accumulatedTime -= timeStep;
    }


    if (myRequest.stopRequest === false) {
        myRequest.currentRequest = requestAnimationFrame(gameLoop);
    }
}

function updateGameLoop() {
    canvasContext.clearRect(camera.x, camera.y, canvas.width, canvas.height);

    // animateBackgroundCanvas(camera.x, camera.y)

    canvasContext.drawImage(backgroundImage, camera.backgroundX, camera.backgroundY - backgroundImage.height + canvas.height, backgroundImage.width, backgroundImage.height);

    for (let gameLoopState = 0; gameLoopState < 5; gameLoopState++) {
        for (let singleGameObject of gameObjects) {
            if (singleGameObject.active === true) {
                if (gameLoopState === 0) {
                    singleGameObject.storeCurrentPosition();
                    singleGameObject.update();
                } else if (gameLoopState === 1) {
                    singleGameObject.checkForCollision();
                } else if (gameLoopState === 2) {
                    if (singleGameObject instanceof PlayerFigure) {
                        applyPhysics(singleGameObject);
                    }
                } else if (gameLoopState === 4) {
                    if (singleGameObject instanceof PlayerFigure) {
                        singleGameObject.setAnimation();
                    }

                    singleGameObject.draw();
                }
            }
        }
    }
}



export { gameObjects, gameLoop };
