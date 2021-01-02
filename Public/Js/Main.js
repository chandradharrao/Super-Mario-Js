import SpriteSheet from "./SpriteSheet.js"
import {loadImage,loadLevel} from "./Loader.js"
import {gridViz} from "./GridVisulalizer.js"
import {PIXELS_PER_UNIT,NUM_COLUMNS,NUM_ROWS} from './Constants.js'
import {drawBackground,drawGround} from "./Draw.js"

const canvas = document.getElementById("screen");
if(canvas.getContext){
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext('2d');
    //load the image
    loadImage("../Assets/mario.png").then((image)=>{
        const spriteSheet = new SpriteSheet(image,PIXELS_PER_UNIT,PIXELS_PER_UNIT);
        spriteSheet.defineSprite('ground',0,0);
        spriteSheet.defineSprite('sky',3,23);

        //load the level
        loadLevel("Level-1").then(res=>{/*we need to return the JSONfied result to the next then chain*/return res.json()}).then(resData=>{
            //draw sky
            drawBackground(resData,ctx,spriteSheet);

            //draw ground
            drawGround(resData,ctx,spriteSheet);
        }).catch(err=>console.log(err)); 

        //vizualize grid system
        gridViz(ctx);
    }).catch(err=>{
        console.log(err)
    })
}

