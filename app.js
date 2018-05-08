// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: "#hook1"  // the scene should last for a scroll distance of 100px
      // start this scene after scrolling for 50px
    })
    .setPin("#highcharts-3eb3ee9d-0bc5-4590-95d8-42a1aec79b11") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
