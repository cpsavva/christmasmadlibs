function takeWord() {
		console.log("did this work right?" + $(".preview").val() );
		$("#word").html('<span class="spanbox">'+$(".preview").val()+'</span>')
	};

function displayWord() {
	$(".lalalu").click(function(){takeWord()})

};





$(document).ready(
	displayWord()
	);