import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#orange-mtn",{transformOrigin:"center"});
gsap.set("#red-mtn",{transformOrigin:"center"});
gsap.set(".front-mtns",{transformOrigin:"center"});
gsap.set(".trees1",{transformOrigin:"center"});


zoomTL.from("#mountain1",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            .from("#mountain2",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#rocket",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#trees1",{duration:5.5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees2",{duration:5.25, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#smoke",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("trees4",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("trees5",{duration:4.75, scale:10,ease: "power4.out",y:"+=420"},"zoom")