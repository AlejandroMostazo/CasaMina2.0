var myCarousel = document.getElementById('carouselExample');
          var carousel = new bootstrap.Carousel(myCarousel);
        
          document.querySelectorAll('.galery').forEach(function(img, index) {
            img.addEventListener('click', function() {
              var src = this.getAttribute('src');
              var carouselItems = document.querySelectorAll('.carousel-inner .carousel-item');
        
              // Encontrar el elemento correspondiente en el carrusel
              var targetItem = null;
              carouselItems.forEach(function(item) {
                if (item.querySelector('img').getAttribute('src') === src) {
                  targetItem = item;
                }
              });
        
              if (targetItem !== null) {
                var slideTo = Array.from(targetItem.parentNode.children).indexOf(targetItem);
                carousel.to(slideTo);
              }
            });
          });