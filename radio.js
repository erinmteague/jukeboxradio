// Master Radio Object, this object holds songs //
	var Radio = {
		
	currentNum: 0,
	
	playlist: ["https://ia801405.us.archive.org/6/items/OTRR_Crime_Classics_Singles/cric_53-07-06_ep04_The_Shrapnelled_Body_Of_Charles_Drew_Senior.mp3", "https://ia801405.us.archive.org/6/items/OTRR_Crime_Classics_Singles/cric_53-09-30_ep14_The_Bloody_Bloody_Banks_Of_Fall_River.mp3", "https://ia801405.us.archive.org/6/items/OTRR_Crime_Classics_Singles/cric_53-10-07_ep15_The_Hangman_and_William_Palmer_-_Who_Won.mp3", "https://ia801405.us.archive.org/6/items/OTRR_Crime_Classics_Singles/cric_54-06-30_ep51_Good_Evening_My_Name_Is_Jack_The_Ripper.mp3", "https://ia801405.us.archive.org/6/items/OTRR_Crime_Classics_Singles/cric_54-05-12_ep45_Mr_Clarkes_Skeleton_In_Mr_Arams_Closet.mp3"],

	play: function(){
		document.getElementById("player").setAttribute('src', this.playlist[this.currentNum]),
		document.getElementById("player").play();
	},

	stop: function(){
		document.getElementById("player").pause();
		},

	next: function(){
		if(this.currentNum == this.playlist.length - 1){
			this.currentNum = 0
			document.getElementById("player").setAttribute('src', this.playlist[0]),
			this.play();
		} else {
			this.currentNum++
			document.getElementById("player").setAttribute('src', this.playlist[this.currentNum]),
			this.play();
		}
	},

}

