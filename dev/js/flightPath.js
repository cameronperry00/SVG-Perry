import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightPathTL = gsap.timeline();

flightPathTL.to("#rocket", {duration: 7, motionPath: {path: "#rocketPath", align:"#rocketPath", alignOrigin: [0.5, 0.5], autoRotate: 90},ease: "none",scale:1});