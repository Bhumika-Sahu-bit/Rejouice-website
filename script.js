gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function cursorEffect() {
var page1Content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove",function(dets){
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
})

page1Content.addEventListener("mouseenter" ,function(){
    gsap.to(cursor, {
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave" , function(){
    gsap.to(cursor, {
        scale:0,
        opacity:0
    })
})
}

cursorEffect();

function cursorEffect5() {
    var page5content= document.querySelector(".page5-content")
    var cursor5 = document.querySelector(".cursor-page5")
    
    page5content.addEventListener("mousemove",function(dets){
        // cursor.style.left = dets.x+"px"
        // cursor.style.top = dets.y+"px"
        gsap.to(cursor5,{
            x:dets.x,
            y:dets.y,
        })
    })
    
    page5content.addEventListener("mouseenter" ,function(){
        gsap.to(cursor5, {
            scale:1,
            opacity:1
        })
    })
    
    page5content.addEventListener("mouseleave" , function(){
        gsap.to(cursor5, {
            scale:0,
            opacity:0
        })
    })
    }
    
    cursorEffect5();
var tl = gsap.timeline();

tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader h3",{
    opacity:0,
    x:-10,
    stagger:-0.1,
    duration:1
})
tl.to('.loader',{
    opacity:0,
})
tl.from(".page1-content h1 span ",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

tl.to(".loader",{
    display:"none"
})



var tl2 = gsap.timeline({defaults: {ease: "power4.out"}});
function page2Animation() {
    tl2.from(".top h2", {
        y:40,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top:40%",
            end:"top 37%",
            // markers:true,
            scrub:2
        }
    })

    tl2.from(".top h3", {
        y:40,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top:40%",
            end:"top 37%",
            // markers:true,
            scrub:2,
        }
    })

    tl2.from(".elem h1 span",{
        transform:"translateX(-80%)",
        opacity:0,
        stagger:2,
        duration:3,
        delay:2,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top:40%",
            // end:"top: 80%",
            // markers:true,
            scrub:2,
            
        }
    })

    // tl2.from(".page3 .page3-top h2",{
    //     transform:"translateY(40%)",
    //     // opacity:0,
    //     duration:1,
    //     stagger:1,
    //     scrollTrigger:{
    //         trigger:".page3",
    //         scroll:".main",

    //         scrub:2
    //     }
    // })
    tl2.from(".page4-top span", {
        y:50,
        opacity:0,
        duration:1,
        stagger:0.15,
        scrollTrigger:{
            trigger:".page4",
            scroller:".main",
            // start:"top:40%",
            // end:"top 37%",
            // markers:true,
            scrub:2
        }
    })

    tl2.from(".page4-mid h1",{
        y:80,
        opacity:0,
        stagger:0.5,
        display:"none",
        // scale:1,
        duration:1,
        scrollTrigger:{
            trigger:".page4",
            scroller:".main",
            // start:"top:40%",
            // end:"top 37%",
            // markers:true,
            scrub:2
        }
    })

    tl2.from(".page8-top ",{
        y:-100,
        duration:0.1,
        opacity:0,
        display:"none",
        scrollTrigger:{
            trigger:".page8",
            scroller:".main",
            scrub:2
        }
    })
    // tl2.from(".top-left h2",".top-left button","top-right .first-list","top-right .second-list",{
    //     opacity:0,
    //     display:"none"
    // })
    tl2.from(".page8-mid ",{
        y:-100,
        duration:0.1,
        opacity:0,
        display:"none",
        scrollTrigger:{
            trigger:".page8",
            scroller:".main",
            scrub:2
        }
    })
    // tl2.from(".mid-left h4",".mid-right h4",{
    //     opacity:0,
    //     display:"none"
    // })

    tl2.from(".page8 h1 span ",{
    y:-100,
    opacity:0,
    stagger:0.2,
    duration:1,
    delay:-0.5,
    scrollTrigger:{
        trigger:".page8",
        scroller:".main",
        scrub:2
    }
})
}

page2Animation();



//swiper 

function slideranimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            duration:8,
            disableOnInteraction: true,
          },
        
      });
}

slideranimation();

//   gsap.to(".page6 .swiper-slide",{
//     transform:"translateX(-130%)",
//     scrollTrigger:{
//         trigger:".page6",
//         scroller:".main",
//         markers:true,
//         start:"top 0",
//         end:"top -150%",
//         scrub:2,
//         pin:true
//     }
// })


