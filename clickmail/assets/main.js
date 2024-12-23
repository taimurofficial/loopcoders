var swiper = new Swiper(".reviews-slide", {
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // slidesPerView: 3,
    // spaceBetween: 25,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    loop: true,
    autoplay: true,
  
    // Responsive breakpoints
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      756: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });
  
// Faq
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



