let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Убираем видимость у всех слайдов и активный класс
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  // Отображаем текущий слайд и плавно его проявляем
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => { 
    slides[slideIndex - 1].style.opacity = "1"; 
  }, 50); // Небольшая задержка для более плавного эффекта
  slides[slideIndex - 1].classList.add("active");

  // Сбрасываем активный класс для точек и добавляем его к текущей точке
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}