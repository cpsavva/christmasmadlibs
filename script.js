var grammarArr = []
var wordArr = []
//function to push data attributes to an array to get the 
function extractDataAttr(){

	$('[data-grammar]').each(function() {
  	console.log($(this).data('grammar'))
  	grammarArr.push($(this).data('grammar'))
  })
	$('[data-word]').each(function(){
		console.log($(this).data('word'))
  	wordArr.push($(this).data('word'))
	})
  	console.log(grammarArr)
  	console.log(wordArr)
};

//function to place the inputs in their prospective places throughout the Mad Lib
function arrangeWord() {
	$.each(grammarArr, function(index, val){
		$("#"+val).html('<span class="spanbox">' + $("input[data-grammar="+ val+ "]").val() + '</span>')
	})
	// grammarArr = [];
	// console.log(grammarArr);
};

//function to do the above actions and clear input fields and arrays.
function displayWord() {
		// extractDataAttr();
		arrangeWord();
		$(":input").val('');
		$(".madLib").hide();
		$(".poem").show();
};
//function to start the mad lib again
function restart(){
	$(".startAgain").click(function(){
		$(".poem").hide();
		$(".madLib").show();
	})
}


//function to slide show the form?

$(document).ready(
	$(".poem").hide())
	extractDataAttr();
	$(".finish").click(function(){
	displayWord()
	restart()
});