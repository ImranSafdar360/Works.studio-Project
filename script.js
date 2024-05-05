const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})

var tl = gsap.timeline();
tl.to("#loader #yellow",{
    y:"-100%",
    duration:0.5,
    delay:0.5,
    ease:"expo.out"
});
tl.to("#loader",{
    y:"-100%",
    duration:0.5,
    delay:0.3,
    ease:"expo.out"
})

const page2 = document.querySelector("#page2");
const elems = document.querySelectorAll(".elem");
elems.forEach(function(ele){
    ele.addEventListener(
        "mouseenter",function(){
            const bgImg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgImg})`
  })
});

const topBtn = document.querySelector("#top-footer");
topBtn.addEventListener("click", function(){
    scroll.scrollTo(0)
})

