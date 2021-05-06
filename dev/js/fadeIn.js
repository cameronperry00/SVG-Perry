import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#sky_3_",{alpha:0, duration:5, scale:20})
        .from("#clouds_3_",{alpha:0, stagger:0.25, duration:0.5},"-=2");