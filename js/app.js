$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-cool').hide();
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
        $('.ryu-still').show();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            1800,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
			}
		);
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
	$('.ryu-ready').hide();
	$('.ryu-cool').hide();
	$('.ryu-throwing').hide();
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }   
});

$(document).keyup(function(e) {
	if (e.keyCode == 88) {
	  $('.ryu-cool').hide();
	  $('.ryu-action').hide();
	  $('.ryu-still').hide();
	  $('.ryu-throwing').hide();
	  $('.ryu-ready').show();
	}


});
