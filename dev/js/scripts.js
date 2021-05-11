import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {numberThing} from "./demo-this"

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { takeOffTL } from "./takeOff"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(takeOffTL)
        .add(zoomTL);


// console.log(numberThing);

GSDevTools.create();