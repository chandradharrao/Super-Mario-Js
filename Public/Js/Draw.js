import {PIXELS_PER_UNIT} from './Constants.js'

/**
 * @method : Draws background tiles of level on canvas
 * @param {Json} lvlData : json format of the level
 * @param {Context2D} context : canvas 2d context on which image has to be drawn
 * @param {SpriteSheet} spriteSheet : spriteSheet object of class spritesheet
 */
export function drawBackground(lvlData,context,spriteSheet){
    const range = lvlData.background.background_range[0];
    const nRowsMin = range.rows_start;
    const nColsMin = range.columns_start;
    const nRowsMax = range.rows_end;
    const nColsMax = range.columns_end

    for(let i = nColsMin;i<nRowsMax;i++){
        for(let j = nRowsMin;j<nColsMax;j++){
            spriteSheet.drawSprite(lvlData.background.background_tile_name,context,i*PIXELS_PER_UNIT,j*PIXELS_PER_UNIT);
        }
    }
}

/**
 * @method : Draws ground tiles of level on canvas
 * @param {Json} lvlData : json format of the level
 * @param {Context2D} context : canvas 2d context on which image has to be drawn
 * @param {SpriteSheet} spriteSheet : spriteSheet object of class spritesheet
 */
export function drawGround(lvlData,context,spriteSheet){
    const range = lvlData.floor.floor_range[0];
    const nRowsMin = range.rows_start;
    const nColsMin = range.columns_start;
    const nRowsMax = range.rows_end;
    const nColsMax = range.columns_end

    for(let i = nRowsMin;i<nRowsMax;i++){
        for(let j = nColsMin;j<nColsMax;j++){
            spriteSheet.drawSprite(lvlData.floor.floor_tile_name,context,i*PIXELS_PER_UNIT,j*PIXELS_PER_UNIT);
        }
    }
}