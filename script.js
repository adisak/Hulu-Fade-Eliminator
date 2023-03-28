// Hulu-Fade-Eliminator
// Hulu cosmetic changes: Remove Fade Scrims and Reduce amount of Fade over Controls / Subtitles
//
// Copyright 2023 Adisak Pochanayon
// contact: adisak@gmail.com
//
// Many thanks to Hide-Mouse-Hulu extension for the example of how to implement this
// https://github.com/NateXVI/Hide-Mouse-Hulu

//-----------------------------------------------------------------------------
// Begin IIFE (Immediately Invoked Function Expression) Scope
(() => {
// Everything within here is "locally scoped"
//-----------------------------------------------------------------------------

// Beginning of "Hide-Mouse-Hulu" related code

// controls container variable declaration
let controlsContainer = null;

// delay between searches for controls container (in milliseconds)
const findDelay = 500;

function setMouse(visibility) {
	// sets the mouse visibility for the Hulu web player
	try {
		// set the web player element cursor style
		document.querySelector('#web-player-app').style.cursor = visibility
			? 'auto'
			: 'none';
	} catch (error) {
		// if the mouse visibility cannot be set, log a warning in the console
		console.warn('could not set mouse visibility', error);
	}
}

function findControlsContainer() {
	// look for a controls container
	controlsContainer = document.querySelector('.ControlsContainer__transition');

	// if the controls container cannot be found
	if (controlsContainer === null) {
		// set timeout to look again in 500ms
		window.setTimeout(findControlsContainer, findDelay);
	}
	// if the controls container can be found
	else {
		// initialize the observer
		initializeControlsObserver();
	}
}

function initializeControlsObserver() {
	// creates an observer and sets it to look for changes in the controls container

	function callback(mutations) {
		// get the opacity of the controls container
		let opacity = parseFloat(controlsContainer.style.opacity);

		// make the mouse visible if the opacity is greater than 0.5
		setMouse(opacity >= 0.5);
	}

	// create an observer
	const observer = new MutationObserver(callback);

	// set the observer to look for changes in the controls container
	observer.observe(controlsContainer, {
		attributes: true, //configure it to listen to attribute changes
	});
}

// End of "Hide-Mouse-Hulu" related code

//-----------------------------------------------------------------------------

function removeCollection(collection)
{
	while(collection.length > 0) {
		collection[0].remove();
	}
}

function nerfFlipTray()
{
	// Note: This function is not currently used.
	// I haven't been able to get nerfFlipTray() to work correctly so I'm overriding the style
	// Using the "styles.css" file.  If anyone wants to figure this out, I'd love them forever.

	// Make the fade area of the FliptrayWrapper less egregious
	let flipWrapper = document.querySelector('.FliptrayWrapper');
	if (flipWrapper !== null) {
		// This doesn't work?
		flipWrapper.style.setProperty('background', 'linear-gradient(180deg, rgba(0,0,0,.0001), rgba(0,0,0,.0001) 60.0%, rgba(0,0,0,.2) 65%, rgba(0,0,0,.25) 70%);');

		let flipStyle = getComputedStyle(flipWrapper, '::before');
		if (flipStyle !== null) {
			// This gives an error because flipStyle is const!
			flipStyle.background = 'linear-gradient(180deg, rgba(0,0,0,.0001), rgba(0,0,0,.0001) 60.0%, rgba(0,0,0,.2) 65%, rgba(0,0,0,.25) 70%);';
		}
	}
}

function removeFadeBars()
{
	// Remove the fade scrims at the top and bottom
	let scrimTop = document.getElementsByClassName('ControlScrim__top');
	if (scrimTop !== null) {
		removeCollection(scrimTop);
	}
	let scrimBottom = document.getElementsByClassName('ControlScrim__bottom');
	if (scrimBottom !== null) {
		removeCollection(scrimBottom);
	}
}

function activateExtension() {
	removeFadeBars();
	window.setTimeout(activateExtension, findDelay);
}


function runExtension()
{
	// This is the "main" function for this Chrome Extension
	{
		// This is for removing unwanted faders
		activateExtension();
	}
	
	{
		// The following line actually activates the "Hide-Mouse-Hulu" feature
		// start finding the controls container
		findControlsContainer();
	}
}

// Run the code for the Chrome Extension
runExtension();

//-----------------------------------------------------------------------------
// End IIFE (Immediately Invoked Function Expression) Scope
})();
// Back to Global Scope
//-----------------------------------------------------------------------------

