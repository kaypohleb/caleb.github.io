$("#about-btn").click(function() {
	console.log("hello");
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$("#about-btn").click(function() {
	console.log("hello");
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$(function () { // wait for document ready
    // init
    
	var controller = new ScrollMagic.Controller();
	// define movement of panels
	var wipeAnimation = new TimelineMax()
        .fromTo("#about", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        .fromTo("#contact", 1, {x: "-130%"}, {x: "0%", ease: Linear.easeNone}); // in from left
	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "200%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});