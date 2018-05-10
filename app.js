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


new ScrollMagic.Scene({
		duration: $("#refPin1").height(),
        triggerElement: "#refPin1"
    })
	.triggerHook(0)
    .setPin("#vid") 
    .addTo(controller)

if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   document.getElementsByTagName(".fondImgResponsive").className += " safari";
}