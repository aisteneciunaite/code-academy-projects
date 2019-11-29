/*Scroll section into view*/ 

//create event listeners
//on click
//identify clicked section id
//scroll corresponding section into view

var arr = document.querySelectorAll('body > header > div > nav > a');

for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener('click', function() {
        document.getElementById(this.getAttribute('data-target')).scrollIntoView({behavior: "smooth"});
        event.preventDefault();
    })    
}



/* <!-- Initialize reviews Swiper --> */

  var swiper = new Swiper('.rw-swiper', {
    slidesPerView: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
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


/* <!-- Initialize galery Swiper --> */

var menu = ['REGISTER', 'APPLY','RECIEVE'];

var galerySwiper = new Swiper('.ft-swiper', {
    spaceBetween: 100,
    centeredSlides: true,
    slidesOffsetAfter: 150,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="square row '+className+'" data-aos="flip-left" data-aos-duration="1000"><div>'+(menu[index])+'</div></div>'
        },
    },

})