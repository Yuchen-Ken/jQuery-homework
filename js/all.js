$(document).ready(function () {
    // lightbox 效果
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

      var mySwiper = new Swiper ('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        speed: 3000,
        loop: true,
        autoplay: {
        delay: 500,
        },
        effect: 'coverflow',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })

    $(".drop-down").click(function (e) { 
      e.preventDefault();
      $(".drop-down").toggleClass("active");
      $(".drop-down-menu").slideToggle();
    });
    
   $("#gotop").click(function (e) { 
    e.preventDefault();
    $("html,body").animate({scrollTop:0},800)
   });
   
   $(window).scroll(function() {
	  if ( $(this).scrollTop() > 800){
		$('#gotop').fadeIn();
	  } else {
		$('#gotop').fadeOut();
	  }
	});
});