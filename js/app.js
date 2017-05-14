$(document).ready(function(){

	var timer;
	var _item;
	var _currentHeight;

	$('.cg-inner').mouseenter(function() {
		_item = $(this);
		_currentHeight = _item.outerHeight();
		timer = setTimeout(function(){
			_item.animate({height:200},200);
			_item.addClass('open');
		},300);
		
	}).mouseleave(function() {
		_item.removeClass('open');
		_item.animate({height:_currentHeight},100);
		clearTimeout(timer);
	});
	$(window).resize(function(){
		$('.cg-inner').removeAttr('style');
	});

});