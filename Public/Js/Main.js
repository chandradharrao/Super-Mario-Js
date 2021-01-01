import SpriteSheet from "./SpriteSheet.js"
import {loadImage} from "./Loader.js"
import {gridViz} from "./GridVisulalizer.js"
import {PIXELS_PER_UNIT,NUM_COLUMNS,NUM_ROWS} from './Constants.js'

const canvas = document.getElementById("screen");
if(canvas.getContext){
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext('2d');
    //load the image
    loadImage("../Assets/mario.png").then((image)=>{
        const spriteSheet = new SpriteSheet(image,PIXELS_PER_UNIT,PIXELS_PER_UNIT);
        spriteSheet.defineSprite('ground',0,0);
        spriteSheet.defineSprite('sky',3,23);

        //draw the sky
        for(let i = 0;i<NUM_ROWS;i++){
            for(let j = 0;j<NUM_COLUMNS;j++){
                spriteSheet.drawSprite('sky',ctx,i*16,j*16);
            }
        }

        //draw ground
        for(let i = 0;i<NUM_ROWS;i++){
            for(let j = 20;j<NUM_COLUMNS;j++){
                spriteSheet.drawSprite('ground',ctx,i*16,j*16);
            }
        }

        //vizualize grid system
        gridViz(ctx);
    }).catch(err=>{
        console.log(err)
    })
}

