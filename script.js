$(document).ready(function(){
	$("#play").on('click', function(){
		$("#play").hide();
		$(".stop").show();
		$("#onair").css({
			backgroundColor: 'red'
		});
		$("#onair").addClass("light");
	});
	$(".stop").on('click', function(){
		$(".stop").hide();
		$("#play").show();
		$("#onair").css({
			backgroundColor: 'black'
		});
		$("#onair").removeClass("light");
	});
});
