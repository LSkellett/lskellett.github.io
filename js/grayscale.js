var window_width = $(window).width();  
var window_height = $(window).height();  

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse")
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse")
    }
}
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault()
    })
});
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle')
})

$('.modal_window').each(function(){  
	var modal_height = $(this).outerHeight();  
    var modal_width = $(this).outerWidth(); 
	var	window_pos = $(window).scrollTop();	
	var top = (window_height-modal_height)/2;  
	
	$(this).css({'top' : '10%' , 'right':'5%'});
});
$('.activate_modal').click(function(){  
	var modal_id = $(this).attr('name'); 
	show_modal(modal_id);  
});
$('.close_modal').click(function(){ 
    close_modal();    
});  
function close_modal(){
    $('#mask').fadeOut(500);  
    $('.modal_window').fadeOut(500);    
}  
function show_modal(modal_id){  
    $('#mask').css({ 'display' : 'block', opacity : 0});  
    $('#mask').fadeTo(500,0.8);   
    $('#'+modal_id).fadeIn(500);  
}