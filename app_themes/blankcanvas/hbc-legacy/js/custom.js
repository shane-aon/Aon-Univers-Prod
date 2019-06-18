$(document).ready(function() {
	$('.dropdown-toggle').dropdownHover().dropdown();
	
	// Collapase Menu
	$('#accordion').on('show.bs.collapse', function () {
    	$('#accordion .in').collapse('hide');
	});
	
	$('.panel-heading a').click(function() {
    	$('.panel-heading').removeClass('selected');
    	$(this).parents('.panel-heading').addClass('selected');
	});
	
	$('.well').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});
	
	var showChar = 190;
    var ellipsestext = "...";
    var moretext = "Full Quote";
    var lesstext = "Less Quote";
    $('.more').each(function() {
    	var content = $(this).html();
    	
        if(content.length > showChar) {
        	var paraTag = content.indexOf("<p");
        	if (paraTag < showChar) {
        		showChar = paraTag-1;
        	}
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
            
            var html = c + '<span class="moreellipses">' + ellipsestext+ ' </span><span class="morecontent"><span>' + h + '</span>  <a href="" class="morelink"> ' + moretext + '</a></span>';
            $(this).html(html);
        } 
    });
	$(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
	
});