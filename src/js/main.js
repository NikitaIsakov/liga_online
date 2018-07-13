  $(document).ready(function(){

			var btn = document.getElementsByClassName('btn-burger-mobile');
				var notification = document.getElementsByClassName('burger-notification');
				var mobile_nav = document.getElementsByClassName('wrap-nav-mobile');
				var btn_burger = document.getElementsByClassName('btn-burger');

				btn[0].onclick = function (e) {
					btn_burger[0].classList.toggle("burger-active");
					btn[0].classList.toggle("burger-notification");
					mobile_nav[0].classList.toggle("wrap-nav-mobile-active");
				};




   var owl = $('.owl-carousel-news');
      owl.owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        // nav: true,
        
        onInitialized: function(e) {
          $('.counter1').text('< 1 / ' + this.items().length + ' > ')
        }
        
      });
      owl.on('changed.owl.carousel', function(e) {
        $('.counter1').text(' < ' + ++e.page.index + ' / ' + e.item.count + ' >')
      }); 

    var owl1 = $('.owl-carousel-season');
      owl1.owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        // nav: true,
        
        onInitialized: function(e) {
          $('.counter2').text('< 1 / ' + this.items().length + ' > ')
        }
        
      });
      owl1.on('changed.owl.carousel', function(e) {
        $('.counter2').text(' < ' + ++e.page.index + ' / ' + e.item.count + ' >')
      }); 

     

    });