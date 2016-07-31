$( document ).ready(function() {

	var play = $('.play');
	var pause = $('.pause');
	var music;
	var duration;
	var trackLenght = $('.playme').length;
	var trackUrl;


	// for ( i=0; i<trackLenght; i++){
	// 	var trackUrl = $('#'+(i+1)).attr('track');
	// 	console.log(trackUrl);
	// 	var mm = 'song'+(i+1);
	// 	mm = new Audio(trackUrl);

	// }
	music = document.createElement("audio");
	 	music.addEventListener("loadeddata", function() {
	});
	// music.addEventListener('loadedmetadata',function(){
 //           songDuration(duration)
 //    },false);

	play.on('click', function(e) {
		e.preventDefault();

		if (!trackUrl){
			trackUrl = $(this).attr('track');
			console.log('1');
			music.setAttribute("src", trackUrl);
		} else if (trackUrl != $(this).attr('track')){
			$('.tracktime').html(' ');
			play.removeClass('hide');
			pause.addClass('hide');
			trackUrl = $(this).attr('track');
			music.setAttribute("src", trackUrl);
			console.log('2');
		} 

		music.play();

		curentEl = $(this).attr('id');
		var target = 'tracktime'+curentEl;
		timeupdating(target);

		$(this).toggleClass('hide');
		$(this).next('.pause').toggleClass('hide');

	});

	pause.on('click', function(e) {
		e.preventDefault();
		music.pause();

		$(this).toggleClass('hide');
		$(this).prev('.play').toggleClass('hide');
	});

	function timeupdating(curentEl){

		music.ontimeupdate = function(){
			curtime = parseInt(music.currentTime, 10);

			var minutes = "0" + Math.floor(curtime / 60);
		    var seconds = "0" + (curtime - minutes * 60);
		    var cur = minutes.substr(-2) + ":" + seconds.substr(-2)+' / ';

		    document.getElementById(curentEl).innerHTML = cur;

			// document.getElementById('tracktime').innerHTML = cur;
		};
	}

	function songDuration(){
		var minutes = "0" + Math.floor(music.duration / 60);
		var seconds = "0" + (music.duration - minutes * 60);
		$('.song-duration').html( minutes.substr(-2) + ":" + seconds.substr(-2));
	}
});
