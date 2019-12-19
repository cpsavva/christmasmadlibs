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
	// console.log("arrangWord function")
	// console.log("this is the array " + grammarArr)
	$.each(grammarArr, function(index, val){
		$("#"+val).html('<span class="spanbox">' + $("input[data-grammar="+ val+ "]").val() + '</span>')
	})
	grammarArr = [];

	console.log(grammarArr);
};



function displayWord() {
	$(".submit").click(function(){
		extractDataAttr();
		arrangeWord();
			$(':input').val('');
	}); 
};


$(document).ready(
	displayWord()
	);