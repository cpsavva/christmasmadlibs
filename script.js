function takeWord() {
		console.log("did this work right?");
		$("#word").html($(".preview").val())
	};

function displayWord() {

	$(".lalalu").click(function(){takeWord()})
};





$(document).ready(
	displayWord()
	);