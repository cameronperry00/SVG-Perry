import { gsap } from "gsap";

export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:1, x:"-=70", y:"+=100", rotation:"+=8"})