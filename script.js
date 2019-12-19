var grammarArr = []
//function to push data attributes to an array to get the 
function extractDataAttr(){

	$('[data-grammar]').each(function(name) {
  	console.log($(this).data('grammar'))
  	grammarArr.push($(this).data('grammar'))
  })
  	console.log(grammarArr)
};

//function to place the inputs in their prospective places throughout the Mad Lib
function arrangeWord() {
	$.each(grammarArr, function(index, val){
		$("#"+val).html('<span class="spanbox">' + $("input[data-grammar="+ val+ "]").val() + '</span>')
	})
	grammarArr = [];
	console.log(grammarArr);
};

//function to do the above actions and clear input fields and arrays.
function displayWord() {
		extractDataAttr();
		arrangeWord();
		$(":input").val('');
		$(".madlib").hide();
		$(".poem").show();
};
function restart(){
	$(".startAgain").click(function(){
		$(".poem").hide();
		$(".madlib").show();
	})
}


$(document).ready(
	$(".poem").hide())
	$(".finish").click(function(){
	displayWord()
	restart()
});