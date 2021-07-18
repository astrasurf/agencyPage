window.addEventListener("DOMContentLoaded", init)

function init() {
    console.log("Page Initiated")
    gsap.set([sideMenu], {x:-472})
    document.getElementById("hamburgerHolder").addEventListener("click", hamburgerOpen);
}

function hamburgerOpen() {
    console.log("Open up sideMenu")
    document.getElementById("hamburgerHolder").removeEventListener("click", hamburgerOpen);
    document.getElementById("hamburgerHolder").addEventListener("click", hamburgerClose);
    gsap.to([sideMenu], {duration: 0.6, x:40, ease:"power4.out"})
    gsap.to([hamLine1], {duration:0.6, rotation:45})
    gsap.to([hamLine2], {duration:0.6, opacity:0})
    gsap.to([hamLine3], {duration:0.6, y:-23, rotation:135})
    
}

function hamburgerClose() {
    console.log("Close sideMenu")
    document.getElementById("hamburgerHolder").removeEventListener("click", hamburgerClose);
    document.getElementById("hamburgerHolder").addEventListener("click", hamburgerOpen);
    gsap.to([sideMenu], {duration: 0.6, x:-472, ease:"power4.out"})
    gsap.to([hamLine1], {duration:0.6, rotation:0})
    gsap.to([hamLine2], {duration:0.6, opacity:1})
    gsap.to([hamLine3], {duration:0.6, y:0, rotation:0})
    
}