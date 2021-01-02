/**
 * Function to load an image from the url
 * @method
 * @param {String} url : the url of the image
 * @returns {Promise<Image>} the loaded image
 */
export function loadImage(url){
    //return a new promise
    return new Promise((resFun,rejFun)=>{
        //this will fire after network request below
        const image = new Image();
        image.addEventListener("load",()=>{
            resFun(image);
        })
        //listen for error event when loading image
        image.addEventListener("error",(err)=>{
            rejFun(err)
        })
        //make the network request
        image.src = url;
    })
}

/**
 * Function to load the level json file
 * @method
 * @async
 * @param {String} levelName : the name of the level you want to load 
 * @returns {Promise.<Bar>} LevelDataPromise
 * @fulfill {String} json format of level data
 * @reject {TypeError} incorrect type of level Name
 * @throws {Error}
 */
export function loadLevel(levelName) {
    return fetch("/Assets/Levels/" + levelName + ".json")
}