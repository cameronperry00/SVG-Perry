import { gsap } from "gsap";

gsap.set("#rocket",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket_1_",{duration:0.15, rotation:-10,ease:"none"})
        .to("#rocket_1_",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#rocket_1_",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket_1_",{duration:7, y:"-=800", ease: "power3.in"}, "upAndAway")
        .to("#clouds_3_",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees1_2_",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees2_2_",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain1",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#ground_3_",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon",{duration:6, y:"1000", ease: "power4.in"},"upAndAway");