import { gsap } from "gsap";

export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:1, x:"-=100", y:"+=100", rotation:"-=20"})