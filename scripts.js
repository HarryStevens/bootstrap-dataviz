/**
 * @author Harry Stevens
 */

//When everything is loaded, call the function "modal"
$(document).ready(function() {
	modal();
});

//Push html with the video iframe when the modal button is clicked. Replace it with an empty space when the close button is clicked. This will serve to turn off
//the audio from the video when the modal is not open.
function modal() {
	$(".camaro").on("click", function() {
		$(".modal-body").html('<iframe class="modal-video" src="http://www.youtube.com/embed/fBvwBiyTjnY?html5=1" frameborder="0" allowfullscreen></iframe>');
	});
	$(".close-modal").on("click", function() {
		$(".modal-body").html('&nbsp;')
	});
}
