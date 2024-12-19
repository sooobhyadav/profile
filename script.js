
var tl = gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
tl.from("#content h1",{
    x:500,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
tl.from("#content img",{
    x:100,
    rotate:450,
    opacity:0,
    duration:0.8,
    delay:0.5,
})
tl.from("#footer h3",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})