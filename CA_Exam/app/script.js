/*Scroll section into view*/ 

var arr = document.querySelectorAll('body > header > div > nav > a');

for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener('click', function() {
        document.getElementById(this.getAttribute('data-target')).scrollIntoView({behavior: "smooth"});
        event.preventDefault();
    })    
}

/* Initialize reviews swiper */

  var swiper = new Swiper('.rw-swiper', {
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        650: {
          slidesPerView: 2,
          // spaceBetween: 30
        },
        900: {
            slidesPerView: 3,
            // spaceBetween: 30
        },
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    //   },
  });


/* Initialize features swiper*/

var menu = ['REGISTER', 'APPLY','RECIEVE'];

var galerySwiper = new Swiper('.ft-swiper', {
    spaceBetween: 100,
    centeredSlides: true,
    slidesOffsetAfter: 150,
    loop: true,
    
    fadeEffect: {
      crossFade: true,
    },
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div data-aos-anchor-placement="top-bottom" class="features-pagination row '+className+'" data-aos="flip-left" data-aos-duration="1000"><div>'+(menu[index])+'</div></div>'
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

})

/* Toggle subcription form in mobile */
var formToggleButton = document.getElementById('sub-form-tgl');
var subscriptionForm = document.getElementById('subscription-form');

formToggleButton.addEventListener('click', function(){
  // subscriptionForm.classList.toggle('closed');
  if (subscriptionForm.classList.contains('closed')) {
    subscriptionForm.classList.remove('closed');
    formToggleButton.innerHTML = '<h5>></h5>';
  }
  else {
    subscriptionForm.classList.add('closed');
    formToggleButton.innerHTML = '<h5><</h5>'
  }
})



