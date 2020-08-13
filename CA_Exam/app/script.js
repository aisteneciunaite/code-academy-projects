var arr = document.querySelectorAll('body > header > div > nav > a');
var menuToggleButton = document.getElementById('menu-button');
var topMenu = document.getElementById('menu');
var formToggleButton = document.getElementById('sub-form-tgl');
var subscriptionForm = document.getElementById('subscription-form');
var submitButtons = document.querySelectorAll('input[type="button"]');
var textInputs = document.querySelectorAll('input[type="text"], input[type="tel"]');
var radioInputs = document.querySelectorAll('input[type="radio"]');

/*Scroll section into view*/

for (let index = 0; index < arr.length; index++) {
  arr[index].addEventListener('click', function () {
    el = document.getElementById(this.getAttribute('data-target'));
    var topOfElement = el.offsetTop;
    window.scroll({ top: topOfElement, behavior: 'smooth' });
    event.preventDefault();

    if (topMenu.classList.contains('open')) {
      topMenu.classList.remove('open');
      menuToggleButton.classList.remove('open');
    }
  });
}
/* Initialize reviews swiper */

const swiper = new Swiper('.rw-swiper', {
  slidesPerView: 1,
  breakpoints: {
    650: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* Initialize features swiper*/

var menu = ['REGISTER', 'APPLY', 'RECIEVE'];

const galerySwiper = new Swiper('.ft-swiper', {
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
      return (
        '<div data-aos-anchor-placement="top-bottom" class="features-pagination row ' +
        className +
        '" data-aos="flip-left" data-aos-duration="1000"><div>' +
        menu[index] +
        '</div></div>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Toggle subcription form in mobile */
function toggleForm() {
  if (subscriptionForm.classList.contains('closed')) {
    subscriptionForm.classList.remove('closed');
    formToggleButton.innerHTML = '<h5>></h5>';
  } else {
    subscriptionForm.classList.add('closed');
    formToggleButton.innerHTML = '<h5><</h5>';
  }
}

formToggleButton.addEventListener('click', toggleForm);

/* Toggle mobile menu in mobile */

menuToggleButton.addEventListener('click', function () {
  // subscriptionForm.classList.toggle('closed');
  if (topMenu.classList.contains('open')) {
    topMenu.classList.remove('open');
    menuToggleButton.classList.remove('open');
  } else {
    topMenu.classList.add('open');
    menuToggleButton.classList.add('open');
  }
});

/* form validation */

submitButtons.forEach(element => {
  element.addEventListener('click', submitForm);
});

textInputs.forEach(element => {
  element.addEventListener('keydown', clearAlert);
});

radioInputs.forEach(element => {
  element.addEventListener('click', clearAlert);
});

function submitForm() {
  var radioButtonChecked = false;
  var formFilled = true;
  var form = this.parentElement;
  formInputs = form.querySelectorAll('input[type="text"], input[type="tel"]');
  radioButtons = form.querySelectorAll('input[type="radio"]');

  //Check if text fields are filled

  formInputs.forEach(element => {
    if (!element.value) {
      if (!element.classList.contains('alert')) {
        element.classList.add('alert');
      }
      if (formFilled) {
        formFilled = false;
      }
    }
  });

  //Check if radio button is selected
  radioButtons.forEach(element => {
    if (element.checked) {
      radioButtonChecked = true;
    }
  });

  if (radioButtonChecked === false) {
    var radioParent = radioButtons[0].parentElement;
    if (!radioParent.classList.contains('alert')) {
      radioParent.classList.add('alert');
    }
  }

  if (!formFilled || !radioButtonChecked) {
    alert('Please complete the form');
  } else {
    //clear form
    formInputs.forEach(element => {
      element.value = '';
    });
    radioButtons.forEach(element => {
      element.checked = false;
    });
    toggleForm();
    alert('Thanks');
  }
}

//clear alert highlights if form is being filled

function clearAlert() {
  if (this.classList.contains('alert')) {
    this.classList.remove('alert');
  } else if (this.parentElement.classList.contains('alert')) {
    this.parentElement.classList.remove('alert');
  }
}
