console.log(navigator.userAgent)
//TODO: add kommenterar

function showForm() {
	console.log('i form')
	document.getElementById('reg-form').style.display = 'block';

}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	console.log('Använd bilden');
	document.getElementById('bgvid').style.display = 'none' ;
//	document.getElementById('mainNav').style.border= 'transparent' ;
	document.getElementById('top').style.background = "url('../assets/baking.png') no-repeat center";
	document.getElementById('top').style.backgroundSize = "cover";

} else {
	console.log('använd filmen');
	document.getElementById('bgvid').style.display = 'show' ;
}

var a = $(".section-1").offset().top;
$(document).scroll(function() {
	if ($(this).scrollTop() < (a - 70)) {
		$('.navbar').css({
			"background-color": "transparent"
		});
		$('.navbar').css({
			"border-color": "transparent"
		});
	} else {
		$('.navbar').css({
			"background-color": "black"
		});

	}
});
