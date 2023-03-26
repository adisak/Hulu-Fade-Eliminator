// Hulu-Fade-Eliminator
// Hulu cosmetic changes: Remove Fade Scrims and Reduce amount of Fade over Controls / Subtitles
//
// Copyright 2023 Adisak Pochanayon
// contact: adisak@gmail.com
//
// Many thanks to Hide-Mouse-Hulu extension for the example of how to implement this
// https://github.com/NateXVI/Hide-Mouse-Hulu


// controls container variable declaration
let controlsContainer = null;

// delay between searches for controls container (in milliseconds)
const findDelay = 500;

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
		removeFadeBars();
	}
}

function removeCollection(collection)
{
	while(collection.length > 0) {
		collection[0].remove();
	}
}

function nerfFlipTray()
{
	// Note: I haven't been able to get nerfFlipTray() to work correctly so I'm overriding the style
	// Using the "styles.css" file.  If anyone wants to figure this out, I'd love them forever.

	// Make the fade area of the FliptrayWrapper less egregious
	var flipWrapper = document.querySelector('.FliptrayWrapper');
	if (flipWrapper !== null) {
		// This doesn't work?
		flipWrapper.style.setProperty('background', 'linear-gradient(180deg, rgba(0,0,0,.0001), rgba(0,0,0,.0001) 60.0%, rgba(0,0,0,.2) 65%, rgba(0,0,0,.25) 70%);');

		var flipStyle = getComputedStyle(flipWrapper, '::before');
		if (flipStyle !== null) {
			// This gives an error because flipStyle is const!
			flipStyle.background = 'linear-gradient(180deg, rgba(0,0,0,.0001), rgba(0,0,0,.0001) 60.0%, rgba(0,0,0,.2) 65%, rgba(0,0,0,.25) 70%);';
		}
	}
}

function removeFadeBars()
{
	// Remove the fade scrims at the top and bottom
	var scrimTop = document.getElementsByClassName('ControlScrim__top');
	if (scrimTop !== null) {
		removeCollection(scrimTop);
	}
	var scrimBottom = document.getElementsByClassName('ControlScrim__bottom');
	if (scrimBottom !== null) {
		removeCollection(scrimBottom);
	}
}

// start finding the controls container
findControlsContainer();

