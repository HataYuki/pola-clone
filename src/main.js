import {domReady} from "./lib/_domReady.js";
import  {Animation,Layer} from '@lottiefiles/lottie-js';
import ANIMATION_JSON from "./assets/data.json";
import lottie from "lottie-web"

const map = (value,istart,istop,ostart,ostop) => ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
const easeInOutQuint = value =>  value < 0.5 ? 2 * value * value : -1 + (4 - 2 * value) * value;
const ANIMATION_JSON_PATH = new URL("./assets/data.json",window.location.href).href

const main = async () =>{
    const animationContainer = document.getElementById("js-animation")
    const animationObject = await Animation.fromURL(ANIMATION_JSON_PATH)
    const totalFrames = animationObject.duration * animationObject.frameRate
    let anim = lottie.loadAnimation({
        container:animationContainer,
        renderer:"svg",
        loop:true,
        autoplay:false,
        animationData:JSON.parse(JSON.stringify(animationObject.toJSON()))
    })

    //
    // console.log(anim.loin)
    // console.log(anim.assets[0].layers[3].shapes[3])
    // anim.assets[0].layers[3].shapes[3].it[1].c.k = [1,1,1]
    // console.log(anim.assets[0].layers[3].shapes[3])
    // console.log(anim.getPath("kv-hand-black"))
    // console.log(anim.loadNextSegment(animationObject))

    const calcScrollValue = () =>{
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        return scrollTop / (scrollHeight - clientHeight);
    }

    const loop = () =>{
        const value = calcScrollValue()

        if(value >= 1){
            window.scrollTo(0,1)
        }

        if(value === 0){
            window.scrollTo(0,(document.documentElement.scrollHeight - document.documentElement.clientHeight) - 1)
        }

        const currentFrame = map(value,0,1,0,totalFrames)
        console.log(anim.assets[0].layers[3].shapes[3])
        anim.goToAndStop(Math.floor(currentFrame),true)
    }


    window.addEventListener("scroll",loop)
}

domReady(main)