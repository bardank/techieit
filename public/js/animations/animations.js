




// roll-text
$(document).ready(function() {
    const tl = new TimelineLite();
    tl.fromTo(".services .roll-text", {x:"60vw", ease:'expo'}, {x:"-30vw", duration:3, ease:'expo'})
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement : '.about',
        duration: 4000,
        triggerHook: 0.5
    })
    .setTween(tl)
    .addTo(controller)
});

// // design-wire.svg

$(document).ready(function() {
    const designWire = document.getElementById("design-wire")
   

        const designTween = new TimelineLite();
        designTween.from(designWire , 1.2, {x:'-100vw', y:'-100vh', ease:Power4.easeOut, opacity:0}, 0)
            .to("#design-wire-sk", 0.5,{opacity:0}, 1)

        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            triggerElement : '.service-animation',
            triggerHook: 0
        })
        
        .setTween(designTween)
        .addTo(controller)
    
});

$(document).ready(function() {
    const designTween = new TimelineLite();
        designTween.from("#webdevelopment-wire", 1.2, {x:'100vw', y:'-100vh', ease:Power4.easeOut, opacity:0}, 0)
        .to("#webdevelopment-wire-sk", 0.6,{opacity:0}, 1)

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement : '#design-wire-sk',
        triggerHook: 0
    })
    // .addIndicators({
    //     colorTrigger: "blue",
    //     colorStart: "red",
    //     colorEnd: "black",
    //     indent: 10
    // })
    .setTween(designTween)
    .addTo(controller)
});

$(document).ready(function() {
    const designTween = new TimelineLite();
        designTween.from("#appdevelopment-wire", 1.2, {x:'-100vw', y:'-100vh', ease:Power4.easeOut, opacity:0}, 0)
        .to("#appdevelopment-wire-sk", 0.5,{opacity:0}, 1.5)

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement : '#webdevelopment-wire-sk',
        triggerHook: 0
    })
    .setTween(designTween)
    .addTo(controller)
});

$(document).ready(function() {
    const designTween = new TimelineLite();
        designTween.from("#digitalcontent-wire", 1.2, {x:'100vw', y:'-100vh', ease:Power4.easeOut, opacity:0}, 0)
        .to("#digitalcontent-wire-sk", 0.5,{opacity:0}, 1)

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement : '#appdevelopment-wire-sk',
        triggerHook: 0
    })
    .setTween(designTween)
    // .addIndicators({
    //     colorTrigger: "blue",
    //     colorStart: "red",
    //     colorEnd: "black",
    //     indent: 10
    // })
    .addTo(controller)
});

// parallex effect
$(document).ready(function() {
   
    let controller = new ScrollMagic.Controller();

    $(".parallex").each(function() {
        let tl = new TimelineMax();
        const heading = $(this).find("h2")
        let child = $(this).find("p");
        tl.staggerTo([child, heading], 1, { y:'-200', ease: Linear.easeNone });

        let scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.6,
            duration: "100%"
        })
        .setTween(tl)
        .addTo(controller);
    });
});

$(document).ready(function() {
    let controller = new ScrollMagic.Controller();

    $("footer").each(function() {
        let tl = new TimelineMax();
        const sun = $(this).find("#sun")
        tl.from(sun, 2, { y: '100vh', ease: Linear.easeNone });
        let scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            // duration: "100%"
        })
        .setTween(tl)
        // .addIndicators({
        // colorTrigger: "black",
        // colorStart: "black",
        // colorEnd: "black",
        // indent: 10
        // })
        .addTo(controller);
    });
    var btn = $('#back-top');

	$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
	});

	btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
	});
			
	// Toggle Menu
	jQuery(document).ready(function($) {
	$('.toggle-menu').jPushMenu();
	});
});
