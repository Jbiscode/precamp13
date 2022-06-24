function slideDown() {
  document.getElementById("myNav").style.height = "30%";
}

function slideUp() {
  document.getElementById("myNav").style.height = "0%";
}

function openNav() {
  document.getElementById("mobileNav").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
  document.body.style.overflow = "initial";
}
    
    var acc = document.getElementsByClassName("accordion");
    
        for (var i = 0; i < acc.length; i++) {   
              acc[i].onclick = function() {	 
                 for (var j = 0 ; j<acc.length; j++){
                     acc[j].classList.remove("active");
                     if (this!==acc[j]) {
                         acc[j].nextElementSibling.style.maxHeight = null;
                     }
                 }
    
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    this.classList.remove("active");
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
         
              }
        }


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });

  var swiper = new Swiper(".Motorstudio", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


  $(".top").click(function(){  
    $( 'html, body' ).stop().animate( { scrollTop : 0 } );
      });


