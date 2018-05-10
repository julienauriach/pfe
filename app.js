// init controller
var controller = new ScrollMagic.Controller();

// create a scene

new ScrollMagic.Scene({
		duration: $("#refPin1").height(),
        triggerElement: "#refPin1"
    })
	.triggerHook(0)
    .setPin("#vid") 
    .addTo(controller);

new ScrollMagic.Scene({
	duration: $("#refPin2").height(),
    triggerElement: "#refPin2"
})
.triggerHook(0)
.setPin("#vid_1") 
.addTo(controller);

new ScrollMagic.Scene({
		duration: $("#hook0").height(),
        triggerElement: "#hook0"
    })
	.triggerHook(0.5)
    .setPin("#highcharts-0b97d81e-bac1-44f8-857b-1e1f3c969c43") 
    .addTo(controller);
