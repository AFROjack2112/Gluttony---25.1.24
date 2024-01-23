import {GameObject} from "./gameObject.js";
import {canvasContext} from "../GameLayers/canvasLayer.js";
import {Obstacle} from "./obstacle.js";
import {changeSound, gameOver} from "../script.js";
import {PlayerFigure} from "./playerFigure.js";


class FlyingObstacle extends GameObject {



    fruitImage = new Image();
    ffruitImage = new Image();
    

    setTileImage = (fruit)=>{
        if (fruit === 'carrot'){
            this.fruitImage.src = './images/flyingObstacles/carrot.png';
            this.ffruitImage.src = './images/flyingObstacles/fcarrot.png';
            }
        else if (fruit === 'banana'){
            this.fruitImage.src = './images/flyingObstacles/banana.png';
            this.ffruitImage.src = './images/flyingObstacles/fbanana.png';
        }
        else if (fruit === 'salad'){
            this.fruitImage.src = './images/flyingObstacles/salad.png';
            this.ffruitImage.src = './images/flyingObstacles/fsalad.png';
        }
        else if (fruit === 'watermelon'){
            this.fruitImage.src = './images/flyingObstacles/watermelon.png';
            this.ffruitImage.src = './images/flyingObstacles/fwatermelon.png';
        }}

    

    constructor(x, y, width, height, restoreposition, endposition, movementspeed, fruit, flipped) {
        super(x, y, width, height);
        this.restoreposition = restoreposition
        this.endposition = endposition
        this.movementspeed = movementspeed
        this.flipped = flipped

        this.setTileImage(fruit)

        if(flipped) this.fruitImage = this.ffruitImage

    }

    //Note: here restoreposition differs from x startposition, so we can controll the intervals between the objects if we want to make a line of flying objects

    update = () => {
        if(!this.flipped){
        this.position.x -= this.movementspeed;
        if (this.position.x + this.dimensions.width < this.endposition) 
        {
        this.position.x =  this.restoreposition   }}

        else{this.position.x += this.movementspeed
        if (this.position.x + this.dimensions.width > this.endposition) 
        {
        this.position.x =  this.restoreposition   }}
        

    }

    onCollision = (otherObject) => {

        if (otherObject instanceof PlayerFigure){
            changeSound('./Audio/spike.mp3')
            gameOver()

//        console.log('end game hereeeeeeeeeeeeeeeeeeeeeeee')
    }

        //endgame

    }

    draw = () => {
        canvasContext.drawImage(this.fruitImage, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);

        // canvasContext.fillStyle = "#660000";
        // canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);


    }
}


export {FlyingObstacle}