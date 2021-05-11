import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#orange-mtn",{transformOrigin:"center"});


zoomTL.from("#mountain1",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
      .from("#mountain2",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
      .from("#rocket-2",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
      .from("#trees1-2",{duration:5.5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
      .from("#trees2-2",{duration:5.25, scale:10,ease: "power4.out",y:"+=420"},"zoom")
      .from("#ground",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")