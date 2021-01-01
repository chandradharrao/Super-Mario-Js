import {NUM_COLUMNS,NUM_ROWS} from './Constants.js'

/**
 * Method for displaying the game grid 
 * @param {Context} ctx : The Canvas Context on which we want to draw the grid
 */
export function gridViz(ctx){
    for(let j = 0;j<NUM_COLUMNS;j++){
        for(let i = 0;i<NUM_ROWS;i++){  
            //the baseline (y coordinate)for fill text begins above the coordinate system for 0,0.hence we need to adjust the y coordinate of the filltext.This is a problem with fill text      
            //refernce : https://stackoverflow.com/questions/19838480/filltext-not-working
            ctx.fillText(`${i},${j}`,i*16,(j+1)*16,16)
            ctx.strokeRect(i*16,j*16,16,16);
        }
    }
}