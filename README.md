# Hulu-Fade-Eliminator
Hulu cosmetic changes: Remove Fade Scrims and Reduce amount of Fade over Controls / Subtitles
	https://github.com/adisak/Hulu-Fade-Eliminator

Copyright 2023 Adisak Pochanayon
contact: adisak@gmail.com

Many thanks to Hide-Mouse-Hulu extension for the example of how to implement this
	https://github.com/NateXVI/Hide-Mouse-Hulu

-----

Now available in Google's Chrome Web Store as well:

https://chrome.google.com/webstore/detail/hulu-fade-eliminator/nlpaahefcnnjkbidjipooakajpeibfea

-----

NOTE: If you want to modify the gradient for the Hulu FliptrayWrapper...

The original gradient for the FliptrayWrapper is:

	.FliptrayWrapper:before {
		...
		background: linear-gradient(180deg,rgba(0,0,0,.0001),rgba(0,0,0,.0156863) 8.62%,rgba(0,0,0,.0509804) 16.56%,rgba(0,0,0,.113725) 23.93%,rgba(0,0,0,.188235) 30.85%,rgba(0,0,0,.278431) 37.42%,rgba(0,0,0,.372549) 43.77%,rgba(0,0,0,.47451) 50%,rgba(0,0,0,.576471) 56.23%,rgba(0,0,0,.67451) 62.58%,rgba(0,0,0,.760784) 69.15%,rgba(0,0,0,.839216) 76.07%,rgba(0,0,0,.898039) 83.44%,rgba(0,0,0,.937255) 91.38%,rgba(0,0,0,.94902));
		...
	}

I replace it with a much softer (and less obtrusive version) using the styles.css file with:

    background: linear-gradient(180deg, rgba(0,0,0,.0001), rgba(0,0,0,.0001) 50.0%, rgba(0,0,0,.2) 55%, rgba(0,0,0,.25) 60%) !important;

If you want to make the fade transparency area go away completely for the FliptrayWrapper for the controls on the bottom of the screen, try this:

    background: linear-gradient(180deg, rgba(0,0,0,.0001), rgba(0,0,0,.0001)) !important;
	