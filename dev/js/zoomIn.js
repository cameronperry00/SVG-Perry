import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#orange-mtn",{transformOrigin:"center"});


zoomTL.from("#mountain1",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            .from("#mountain2",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#rocket_1_",{duration:5.5, scale:10,ease: "power4.out",y:"+=400"},"zoom")
            .from("#trees1_2_",{duration:5.5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees2_2_",{duration:5.25, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#ground_3_",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")