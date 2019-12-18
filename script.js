var grammarArr = []
function extractDataAttr(){

	$('[data-grammar]').each(function() {
  	console.log($(this).data('grammar'))
  	grammarArr.push($(this).data('grammar'))
  })
  	console.log(grammarArr)
};

function arrangeWord() {
	console.log("arrangWord function")
	console.log("this is the array " + grammarArr)
	$.each(grammarArr, function(index, val){
		console.log("this is an "+ val)
		$("#"+val).html('<span class="spanbox">' + $("[data-grammar."+val+"]").val() + '</span>')
	})
	// console.log("did this work right?" + $("[data-grammar]").val() );
	// $("#word").html('<span class="spanbox">'+$("[data-grammar]").val()+'</span>')
};



function displayWord() {
	// $(".lalalu").click(function(){takeWord()})
	$(".lalalu").click(function(){
		extractDataAttr();
		arrangeWord();
	}); 
};


$(document).ready(
	displayWord()
	);