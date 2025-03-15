function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/public/imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/public/imagens/close_white_36dp.svg";
    }
}



let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  let currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";

  // Adiciona um listener para o evento mouseenter
  currentSlide.addEventListener("mouseenter", function() {
    let caption = this.querySelector(".caption");
    caption.style.opacity = 1;
  });

  // Adiciona um listener para o evento mouseleave
  currentSlide.addEventListener("mouseleave", function() {
    let caption = this.querySelector(".caption");
    caption.style.opacity = 0;
  });
}
