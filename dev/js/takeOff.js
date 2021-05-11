import { gsap } from "gsap";

gsap.set("#rocket-2",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket-2",{duration:0.15, rotation:-10,ease:"none"})
        .to("#rocket-2",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#rocket-2",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket-2",{duration:7, y:"-=800", ease: "power3.in"}, "upAndAway")
        .to("#clouds-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees1-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees2-2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain1",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#ground-2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon-2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")