$(".navigation nav a").on('click',function(e) {
  $(".navigation nav a").removeClass('active');
  	$(this).addClass('active');
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#")+1);
    $('html, body').animate({
        scrollTop: ($('#'+hash).offset().top + 20)
    }, 500);
    return false;
});
var hashArray = ['home','services', 'about', 'work'];
var activeArray = ['#74c7d5', '#df5c64', '#91778e', '#a1ca6c'];
$(document).on('scroll', function() {
	for(var licz = 0; licz < (hashArray.length - 1); licz++) {
		if(document.body.scrollTop > $('#' + hashArray[(hashArray.length - 1)]).offset().top) {
			$('.navigation nav a').css({'backgroundColor': 'transparent'})
			$('.navigation nav a').eq(licz + 1).css({'backgroundColor': activeArray[licz + 1]})
		} else if(document.body.scrollTop >= $('#' + hashArray[licz]).offset().top && document.body.scrollTop < $('#' + hashArray[licz + 1]).offset().top ) {
			$('.navigation nav a').css({'backgroundColor': 'transparent'})
			$('.navigation nav a').eq(licz ).css({'backgroundColor': activeArray[licz]})
		}
	}
	// console.log($('#' + hashArray[licz]).offset().top);
	// console.log(document.body.scrollTop)
	// if(document.body.scrollTop > $('#' + hashArray[licz]).offset().top && document.body.scrollTop < $('#' + hashArray[licz + 1]).offset().top ) {
	// 	$('.navigation nav a').eq(licz).css({'backgroundColor': 'transparent'})
	// 	$('.navigation nav a').eq(licz + 1).css({'backgroundColor': activeArray[licz]})
	// }
});