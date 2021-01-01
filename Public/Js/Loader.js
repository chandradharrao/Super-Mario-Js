/**
 * load an image from the url
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