import { gsap } from "gsap";

gsap.set("#rocket",{transformOrigin:"center"});

export let takeOffTL = gsap.timeline();

takeOffTL.to("#rocket_1_",{duration:0.15, rotation:-10,ease:"none"})
        .to("#rocket_1_",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#rocket_1_",{duration:0.15, rotation:0,ease:"none"})
        .to("#rocket_1_",{duration:5, y:"-=700", ease: "power3.in"})
        .to("#clouds",{duration:5, y:"+=700", ease: "power3.in"})
        .to("#front",{duration:5, y:"+=600", ease: "power3.in"})
        .to("#middle",{duration:5, y:"+=500", ease: "power3.in"})