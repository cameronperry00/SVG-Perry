import { gsap } from "gsap";

gsap.set("#rocket",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket",{duration:0.15, rotation:-5,ease:"none"})
        .to("#rocket",{duration:0.15, rotation:5, yoyo:true, repeat:8,ease:"none"})
        .to("#rocket",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket",{duration:7, y:"-=100", ease: "power4.in"}, "upAndAway")
        .to("#clouds",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees1",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#sky",{duration:8, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain1",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#ground",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon",{duration:12, scale: 5, x:"-=700", y:"+=500", ease: "power4.in"},"upAndAway")