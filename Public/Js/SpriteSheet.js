/**
 * Class for drawing particular type of sprite from a given spriteSheet
 */
export default class SpriteSheet{
    /**
     * Constructor for the class
     * @param {Image} spriteSheet : the png of the spriteSheet
     * @param {int} width : pixels per unit height of the spriteSheet
     * @param {int} height : pixels per unit width of the spriteSheet
     */
    constructor(spriteSheet,width,height){
        //properties
        this.spriteHeight = height;
        this.spriteWidth = width;
        this.spriteSheet = spriteSheet;
        //a dictionary containg pairs of spriteName as key and spriteImage as value
        this.allTiles = new Object();
    }

    /**
     * Method to create the sprite from the spriteSheet
     * @param {String} spriteName : name of the type of sprite
     * @param {int} coordinateX : the X coordinate of the sprite in the spritesheet not considering the pixels per unit
     * @param {*} coordinateY : the Y coordinate of the isprite in the spriteSheet not consdering the pixels oer unit 
     */
    defineSprite(spriteName,coordinateX,coordinateY){
        //create the canvas for temprorarily storing the image
        const tempCanavas = document.createElement("canvas");
        //draw the sprite on the temporary canvas at 0,0 by navigating to the correct square on the spriteSheet.
        //Ex:to get the 2nd box sprite,the loc of origin on the spriteSheet is (2*16,0*16) on the spriteSheet
        const tempCtx = tempCanavas.getContext("2d");
        tempCtx.drawImage(this.spriteSheet,
            this.spriteWidth*coordinateX,this.spriteHeight*coordinateY,this.spriteWidth,this.spriteHeight,
            0,0,this.spriteWidth,this.spriteHeight);
        //add the sprite to a dictionary of sprites
        this.allTiles[spriteName] = tempCanavas;
    }

    /**
     * Mthod to render the sprite on the canavs
     * @param {String} spriteName : the name of the sprite to be drawn
     * @param {Canvas} theContext : the main canavss context to be drawn
     * @param {int} dispLocX : the X coordinate on the canvas on which the sprite has to be drawn
     * @param {int} dispLocY : the Y coordinate on the canavs on which the sprite has to be drawn
     */
    drawSprite(spriteName,theContext,dispLocX,dispLocY){
        theContext.drawImage(this.allTiles[spriteName],dispLocX,dispLocY)
    }
}