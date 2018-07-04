   $(document).ready(function(){

			var btn = document.getElementsByClassName('btn-burger-mobile');
				var notification = document.getElementsByClassName('burger-notification');
				var mobile_nav = document.getElementsByClassName('wrap-nav-mobile');
				var btn_burger = document.getElementsByClassName('btn-burger');

				btn[0].onclick = function (e) {
					btn_burger[0].classList.toggle("burger-active");
					btn[0].classList.toggle("burger-notification");
					mobile_nav[0].classList.toggle("wrap-nav-mobile_active");
				};




   var owl = $('.owl-carousel');
      owl.owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        // nav: true,
        
        onInitialized: function(e) {
          $('.counter').text('< 1 / ' + this.items().length + ' > ')
        }
        
      });
      owl.on('changed.owl.carousel', function(e) {
        $('.counter').text(' < ' + ++e.page.index + ' / ' + e.item.count + ' >')
      }); 

     

    });