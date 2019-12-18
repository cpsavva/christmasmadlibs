function arrangeWord() {

	// console.log("did this work right?" + $("[data-grammar]").val() );
	// $("#word").html('<span class="spanbox">'+$("[data-grammar]").val()+'</span>')
};

var grammarArr = []
function extractWord(){

	$('[data-grammar]').each(function() {
  	console.log($(this).data('grammar'))
  	grammarArr.push($(this).data('grammar'))
  })
  	console.log(grammarArr)
};

function displayWord() {
	// $(".lalalu").click(function(){takeWord()})
	$(".lalalu").click(function(){
		extractWord();
		arrangeWord();
	}); 
};


$(document).ready(
	displayWord()
	);