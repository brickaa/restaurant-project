// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready( function () {
	$(function(){
	  $("#slides").slidesjs({
	  	active: true,
	    effect: {
	      fade: {
	        speed: 7000,
	          // [number] Speed in milliseconds of the fade animation.
	        crossfade: true
	          // [boolean] Cross-fade the transition.
	      }
	    }
	  });
	});
});
