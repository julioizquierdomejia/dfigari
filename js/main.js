$(document).ready(function(){

	var $menuPrincipal = $('.navcatalogo');
	var $opcMenu = $menuPrincipal.find('li');

	$opcMenu.hover(function(){
		$me = $(this);
		TweenMax.to($me.find('.iconoOpc'), 0.32, {css:{top:20}})
		TweenMax.to($me.find('.sombraOpc'), 0.32, {css:{opacity:0.6}})
		TweenMax.to($me.find('h2'), 0.32, {css:{opacity:1}})
	}, function(){
		TweenMax.to($me.find('.iconoOpc'), 0.32, {css:{top:30}})
		TweenMax.to($me.find('.sombraOpc'), 0.32, {css:{opacity:1}})
		TweenMax.to($me.find('h2'), 0.32, {css:{opacity:.5}})
	})


})