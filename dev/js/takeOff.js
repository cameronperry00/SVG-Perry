import { gsap } from "gsap";

gsap.set("#rocket",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket",{duration:0.15, rotation:-10,ease:"none"})
        .to("#rocket",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#rocket",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket",{duration:7, y:"-=700", ease: "power3.in"}, "upAndAway")
        .to("#clouds-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees1-2",{duration:6, y:"1000", ease: "power4.in"}, "upAndAway")
        .to("#trees2-2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain1",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountain2",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#ground",{duration:6, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon-2",{duration:6, y:"400", ease: "power4.in"},"upAndAway")