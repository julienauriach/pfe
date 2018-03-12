
//         ARCHIVES

// var controllerObjet1 = new ScrollMagic.Controller({
//     container: '#objet1',
// });

    // new ScrollMagic.Scene({
    //  triggerElement: "#objet1",
    //  triggerHook: 0,
    //  duration: 500,
 //        reverse: true
 //    })
    //     .setPin("#objet1") // pins the element for the the scene's duration
    //     .addIndicators()
    //     .addTo(controller); // assign the scene to the controller
    

var controller = new ScrollMagic.Controller();

		// create a scene
		


	new ScrollMagic.Scene({
		triggerElement: "#objet2",
		triggerHook: 0,
		duration: 500,
        reverse: true
    })
    .setPin("#objet2") // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
		triggerElement: "#objet3",
		triggerHook: 0,
		duration: 500,
        reverse: true
    })
    .setPin("#objet3") // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
		triggerElement: "#objet4",
		triggerHook: 0,
		duration: 500,
        reverse: true
    })
    .setPin("#objet4") // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); // assign the scene to the controller
