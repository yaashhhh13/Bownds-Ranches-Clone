function locojspen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locojspen()


    
var overlayp1 = document.querySelector("#overlayp1")
var iscroll = document.querySelector("#scrollp1")
var p1h1 = document.querySelector("#page1 h1")

overlayp1.addEventListener("mouseenter",function(){
    iscroll.style.scale = 1
})

overlayp1.addEventListener("mousemove",function(dets){
    iscroll.style.top = `${dets.y -40}px`
    iscroll.style.left = `${dets.x - 38}px`
})

overlayp1.addEventListener("mouseleave",function(){
    iscroll.style.scale = 0
})


// document.querySelectorAll("#nav1>h3").forEach(function(e){
//     e.addEventListener("mouseenter",function(){
//         document.querySelector("#nav1>h3::before").style.left = "0%"
//     })
// })

document.querySelector("#nav1 i").addEventListener("click",function(){
    document.querySelector("#mobile-menu").style.top = "0%"
})

document.querySelector("#m-nav h1").addEventListener("click",function(){
    document.querySelector("#mobile-menu").style.top = "-110%"
})



// LOADING ANIMATIONS

var tl = gsap.timeline()

tl.to("#page1 img",{
    height: "100%",
    rotate: "0deg",
    delay: 1
})

tl.to("svg",{
    fill: "#C45508"
})

tl.from("#page1>h1",{
    opacity: 0,
    y: 20,
    onStart: function(){
        $('#page1>h1').textillate({ in:{
             effect: 'fadeInUp',
             delayScale : .2,
             } 
        });
    },
})

// tl.from("#page1>h1",{
//     opacity: 0,
//     stagger: .01,
//     y: 20
// })

gsap.to("svg",{
    scrollTrigger:{
        scroller: "#main",
        trigger: "#page1",
        start: "top 0%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
    },
    top: "10%",
    scale: .9
})

tl.from("#page2>h1",{
    onStart: function(){
        $('#page2>h1').textillate({ in:{
            effect: 'fadeInUp',
            delayScale : .5,
            } 
       });
    },
    scrollTrigger:{
        trigger: "#page2>h1",
        scroller: "#main",
        start: "top 95%",
        // markers: true
    }
})

tl.to("#page2 img",{
    scrollTrigger:{
        scroller: "#main",
        trigger: "#page2 img",
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: 1,
    },
    rotate: "5deg"
})

var tl1 = gsap.timeline({
    scrollTrigger:{
        scroller: "#main",
        trigger: "#nav",
        start: "top -100%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
    },
})
tl1.to("#nav",{
    background: "linear-gradient(#ffffffbc,#ffffff75,#ffffff0b)",
    color: "black"
})

tl1.to("svg",{
    fill: "black"
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        scroller: "#main",
        trigger: "#nav",
        start: "top -290%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
    },
})

tl2.to("#nav",{
    background: "none",
    color: "rgb(249,245,235)"
})

tl2.to("svg",{
    fill: "rgb(249,245,235)"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        scroller: "#main",
        trigger: "#nav",
        start: "top -790%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
    },
})

tl3.to("#nav",{
    background: "linear-gradient(rgba(0, 0, 0, 0.73),rgba(0, 0, 0, 0.292),rgba(0, 0, 0, 0.00))",
    color: "rgb(249,245,235)"
})

tl3.to("svg",{
    fill: "rgb(249,245,235)"
})

var tl4 = gsap.timeline({
    scrollTrigger:{
        scroller: "#main",
        trigger: "#nav",
        start: "top -1050%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
    },
})

tl4.to("#nav",{
    background: "none",
    color: "black"
})

tl4.to("svg",{
    fill: "black"
})

var tl5 = gsap.timeline({
    scrollTrigger:{
        scroller: "#main",
        trigger: "#nav",
        start: "top -1150%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
    },
})

tl5.to("#nav",{
    background: "none",
    color: "rgb(249,245,235)"
})

tl5.to("svg",{
    fill: "rgb(249,245,235)"
})


document.querySelector("#p3overlay").addEventListener("mousemove",function(move){
    document.querySelector("#p3move").style.top = `${move.y-520}px`
    document.querySelector("#p3move").style.left = `${move.x-680}px`
    document.querySelector("#p3move").style.width = "12vw"
    document.querySelector("#p3move").style.height = "16vh"
    document.querySelector("#p3movetext").style.opacity = 1
})


var line = document.querySelectorAll("#line")
var line5 = document.querySelector("#line:nth-child(5)")
var lineoverlay1 = document.querySelector("#lineoverlay1")
var lineoverlay2 = document.querySelector("#lineoverlay2")
var lineoverlay3 = document.querySelector("#lineoverlay3")
var lineoverlay4 = document.querySelector("#lineoverlay4")
var lineoverlay5 = document.querySelector("#lineoverlay5")
var page3img1 = document.querySelector("#img1")
var page3img2 = document.querySelector("#img2")
var page3img3 = document.querySelector("#img3")
var page3img4 = document.querySelector("#img4")
var page3img5 = document.querySelector("#img5")
var lineh1 = document.querySelectorAll("#line h1")
var lineh2 = document.querySelectorAll("#line h2")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")
var b5 = document.querySelector("#b5")

line.forEach(function(o){
    o.addEventListener("mouseenter",function(){
        o.childNodes[1].style.opacity = 1
        o.childNodes[1].style.animationName = "h1"
        o.childNodes[5].style.opacity = 0
        o.style.borderTopColor = "white"
        o.style.borderBottomColor = "white"
        o.style.borderTopWidth = "3px"
        o.style.borderBottomWidth = "3px"
        // console.log(o.childNodes)
    })
})

line.forEach(function(o){
    o.addEventListener("mouseleave",function(){
        o.childNodes[1].style.opacity = 0
        o.childNodes[1].style.animationName = "h"
        o.childNodes[5].style.opacity = 1
        o.style.borderTopColor = "grey"
        o.style.borderTopWidth = "1.5px"
        o.style.borderBottomColor = "grey"
        o.style.borderBottomWidth = "0px"
        line5.style.borderBottomWidth = "1.5px"
        // console.log(o.childNodes)
    })
})





lineoverlay1.addEventListener("mousemove",function(dets){
    page3img1.style.top =`${dets.y-80}px`
    page3img1.style.left = `${dets.x-20}px`
    b1.style.top = dets.y + "px"
    b1.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay1.addEventListener("mouseenter",function(){
    page3img1.style.opacity = 1  
    b1.style.opacity = 1
    // console.log("hey")
})

lineoverlay1.addEventListener("mouseleave",function(){
    page3img1.style.opacity = 0 
    b1.style.opacity = 0
    // console.log("heyaaa")
})



lineoverlay2.addEventListener("mousemove",function(dets){
    page3img2.style.top = `${dets.y-30}px`
    page3img2.style.left = `${dets.x}px`
    b2.style.top = dets.y + "px"
    b2.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay2.addEventListener("mouseenter",function(){
    page3img2.style.opacity = 1  
    b2.style.opacity = 1
    // console.log("hey")
})

lineoverlay2.addEventListener("mouseleave",function(){
    page3img2.style.opacity = 0 
    b2.style.opacity = 0
    // console.log("heyaaa")
})



lineoverlay3.addEventListener("mousemove",function(dets){
    page3img3.style.top = dets.y + "px"
    page3img3.style.left = dets.x + "px" 
    b3.style.top = dets.y + "px"
    b3.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay3.addEventListener("mouseenter",function(){
    page3img3.style.opacity = 1  
    b3.style.opacity = 1
    // console.log("hey")
})

lineoverlay3.addEventListener("mouseleave",function(){
    page3img3.style.opacity = 0 
    b3.style.opacity = 0

    // console.log("heyaaa")
})



lineoverlay4.addEventListener("mousemove",function(dets){
    page3img4.style.top = `${dets.y+10}px`
    page3img4.style.left = `${dets.x}px`
    b4.style.top = dets.y + "px"
    b4.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay4.addEventListener("mouseenter",function(){
    page3img4.style.opacity = 1
    b4.style.opacity = 1  
    // console.log("hey")
})

lineoverlay4.addEventListener("mouseleave",function(){
    page3img4.style.opacity = 0 
    b4.style.opacity = 0
    // console.log("heyaaa")
})



lineoverlay5.addEventListener("mousemove",function(dets){
    page3img5.style.top = dets.y + "px"
    page3img5.style.left = dets.x + "px" 
    b5.style.top = dets.y + "px"
    b5.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay5.addEventListener("mouseenter",function(){
    page3img5.style.opacity = 1  
    b5.style.opacity = 1  
    // console.log("hey")
})

lineoverlay5.addEventListener("mouseleave",function(){
    page3img5.style.opacity = 0 
    b5.style.opacity = 0
    // console.log("heyaaa")
})

tl.to("#page6",{
    scrollTrigger:{
        scroller: "#main",
        trigger: "#page6",
        start: "top top",
        end: "bottom top",
        // markers: true,
        pin: true,
        scrub: .1,
    }
})

tl.from("#p6img2",{
    top: "75%",
    // opacity: 0,
    scrollTrigger:{
        scroller: "#main",
        trigger: "#p6img2",
        start: "top 70%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
    }
})

document.querySelector("#p7overlay").addEventListener("mousemove",function(p7move){
    document.querySelector("#p7move").style.top = `${p7move.y-640}px`
    document.querySelector("#p7move").style.left = `${p7move.x-700}px`
})

document.querySelector("#p7overlay").addEventListener("mouseenter",function(){
    document.querySelector("#p7move").style.width = "10vw"
    document.querySelector("#p7move").style.height = "15vh"
    document.querySelector("#p7movetext").style.opacity = 1
})

document.querySelector("#p7overlay").addEventListener("mouseleave",function(){
    document.querySelector("#p7move").style.width = "0vw"
    document.querySelector("#p7move").style.height = "0vh"
    document.querySelector("#p7movetext").style.opacity = 0
})


tl.to("#page8 img",{
    height: "100%",
    scrollTrigger:{
        scroller: "#main",
        trigger: "#page8 img",
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        scrub: .1,
    }
})


document.querySelectorAll("#p9card-imagecontainer").forEach(function(m){
    m.addEventListener("mousemove",function(p9move){
        document.querySelector("#p9cardsbutton").style.left = `${p9move.x}px`
        document.querySelector("#p9cardsbutton").style.top = `${p9move.y-170}px`
    })
})

document.querySelectorAll("#p9card-imagecontainer").forEach(function(m){
    m.addEventListener("mouseenter",function(p9move){
        document.querySelector("#p9cardsbutton").style.scale = 1
    })
})

document.querySelectorAll("#p9card-imagecontainer").forEach(function(m){
    m.addEventListener("mouseleave",function(p9move){
        document.querySelector("#p9cardsbutton").style.scale = 0
    })
})

document.querySelectorAll("#p9cards").forEach(function(f){
    f.childNodes[3].addEventListener("mouseenter",function(){
        document.querySelector("#p9cardsbutton h3").innerHTML = "jump in"
    })
})

document.querySelectorAll("#p9cards").forEach(function(f){
    f.childNodes[3].addEventListener("mouseleave",function(){
        document.querySelector("#p9cardsbutton h3").innerHTML = "see more"
    })
})
