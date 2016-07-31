$(document).ready(function() {
	$(".fancybox").fancybox({
		helpers: {
		    overlay: {
		      locked: false
		    }
		}
	});
});

new AnimOnScroll( document.getElementById( 'grid' ), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
});
