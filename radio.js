// Master Radio Object, this object holds songs //
	var Radio = {
		
	currentNum: 0,
	
	playlist: ["banks", "hang", "jack", "skeleton"],

	play: document.getElementById("play").onclick = function(){
		document.getElementById("shrap").play();
	}

