// init controller
var controller = new ScrollMagic.Controller({addIndicators: true});

// create a scene
new ScrollMagic.Scene({
		duration: $("#hook0").height(),
        triggerElement: "#hook0"
    })
	.triggerHook(0)
    .setPin("#highcharts-3eb3ee9d-0bc5-4590-95d8-42a1aec79b11") 
    .addTo(controller)
