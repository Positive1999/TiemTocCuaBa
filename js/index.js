var sliderImg = document.querySelector('.slider img');
var images = ['images/banner.jpg', 'images/banner2.jpg'];
var index = 0;

setInterval(function() {
  sliderImg.style.transition = '0.8s';
  sliderImg.src = images[index];
  index = (index + 1) % images.length;
}, 3000);




