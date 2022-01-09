$(document).ready(function(){
	$("#menuToggle").on('click', function(){$("body").toggleClass("open");});
	$("#toggle-button").on('click', function(e){e.preventDefault(); $("#responsive-side-menu").toggleClass('side-menu-show'); $("#responsive-background-menu").toggleClass('background-menu-show'); });
	$("#responsive-background-menu").on('click', function(e){e.preventDefault(); $("#responsive-side-menu").toggleClass('side-menu-show'); $("#responsive-background-menu").toggleClass('background-menu-show'); });
});
