import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { takeOffTL } from "./takeOff"
import { flightPathTL } from "./flightPath"
import { landingTL } from "./landing"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(takeOffTL)
        .add(flightPathTL)
        .add(landingTL);


// console.log(numberThing);

// GSDevTools.create();