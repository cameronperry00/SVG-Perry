import { gsap } from "gsap";

gsap.set("#rocket",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket",{duration:0.15, rotation:-5,ease:"none"})
        .to("#rocket",{duration:0.15, rotation:5, yoyo:true, repeat:8,ease:"none"})
        .to("#rocket",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket",{duration:9, y:"-=700", ease: "power4.in"}, "upAndAway")
        .to("#clouds-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees1-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees2-2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain1",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#ground",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon-2",{duration:9, scale: 5, x: "200", ease: "power4.in"},"upAndAway")