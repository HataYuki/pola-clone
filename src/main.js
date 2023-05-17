import {domReady} from "./lib/_domReady.js";
import  {Animation,Layer} from '@lottiefiles/lottie-js';
import ANIMATION_JSON from "./assets/data.json";
import lottie from "lottie-web"
import lotti_api from "lottie-api"

const map = (value,istart,istop,ostart,ostop) => ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
const easeInOutQuint = value =>  value < 0.5 ? 2 * value * value : -1 + (4 - 2 * value) * value;
const ANIMATION_JSON_PATH = new URL("./assets/data.json",window.location.href).href

const main = async () =>{
    const animationContainer = document.getElementById("js-animation")
    const animationObject = await Animation.fromURL(ANIMATION_JSON_PATH)
    const totalFrames = animationObject.duration * animationObject.frameRate

    // ANIMATION_JSON.assets[0].layers[3].shapes[2].it[1].c.k[0] = 0
    // ANIMATION_JSON.assets[0].layers[3].shapes[2].it[1].c.k[1] = 0
    // ANIMATION_JSON.assets[0].layers[3].shapes[2].it[1].c.k[2] = 1
    
    let anim = lottie.loadAnimation({
        container:animationContainer,
        renderer:"svg",
        loop:true,
        autoplay:true,
        animationData:ANIMATION_JSON
    })

    // var mousePosition = [0,0]
    // const animationAPI= lotti_api.createAnimationApi(anim)
    // var positionProperty = animationAPI.getKeyPath('kv-hand-black,Transform,Position');
    // animationAPI.addValueCallback(positionProperty, function(currentValue) {
    //     return mousePosition;
    // });
    //
    // window.addEventListener('mousemove', function(ev) {
    //     var mouseX = 0, mouseY = 0;
    //     if(ev.touches && ev.touches.length) {
    //         var mouseX = ev.touches[0].pageX;
    //         var mouseY = ev.touches[0].pageY;
    //     } else if(ev.pageX !== undefined) {
    //         mouseX = ev.pageX;
    //         mouseY = ev.pageY;
    //     }
    //     console.log(mouseX, mouseY)
    //     mousePosition[0] = mouseX;
    //     mousePosition[1] = mouseY;
    // })
    //
    //
    //
    // const calcScrollValue = () =>{
    //     const scrollTop = document.documentElement.scrollTop;
    //     const scrollHeight = document.documentElement.scrollHeight;
    //     const clientHeight = document.documentElement.clientHeight;
    //
    //     return scrollTop / (scrollHeight - clientHeight);
    // }
    //
    // const loop = () =>{
    //     const value = calcScrollValue()
    //
    //     if(value >= 1){
    //         window.scrollTo(0,1)
    //     }
    //
    //     if(value === 0){
    //         window.scrollTo(0,(document.documentElement.scrollHeight - document.documentElement.clientHeight) - 1)
    //     }
    //
    //     const currentFrame = map(value,0,1,0,totalFrames)
    //     anim.goToAndStop(Math.floor(currentFrame),true)
    // }
    // //
    // //
    // window.addEventListener("scroll",loop)
}

domReady(main)