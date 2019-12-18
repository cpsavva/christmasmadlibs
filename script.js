function displayWord() {
		$(".submit").click(function() {
    	$($(this).data('copy')).html($(this).val());
  	});
	// $(".preview").on('keydown', function() {
 //    	$($(this).data('copy')).html($(this).val());
 //  	});
};





$(document).ready(

	displayWord());