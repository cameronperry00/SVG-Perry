import { gsap } from "gsap";

gsap.set("#rocket-2",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket-2",{duration:0.15, rotation:-5,ease:"none"})
        .to("#rocket-2",{duration:0.15, rotation:5, yoyo:true, repeat:8,ease:"none"})
        .to("#rocket-2",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket-2",{duration:9, y:"-=700", ease: "power4.in"}, "upAndAway")
        .to("#clouds-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees1-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees2-2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain1",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#ground",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon-2",{duration:9, y:"100", ease: "power4.in"},"upAndAway")