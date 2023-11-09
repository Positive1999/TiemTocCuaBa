var sliderImg = document.querySelector('.slider img');
var images = ['images/banner.jpg', 'images/banner2.jpg'];
var index = 0;

setInterval(function() {
  sliderImg.style.transition = '0.8s';
  sliderImg.src = images[index];
  index = (index + 1) % images.length;
}, 3000);


var connectedEmail = document.querySelector('.connected #email');
var NoneBlockResult= document.querySelector('.Notification');
var ConnectedResult = document.querySelector('.Notification__result');
const btnConnected = document.querySelector('.btn-connected');

btnConnected.addEventListener('click', ()=>{
  noneNotification = ()=>{
    NoneResult.style.display = 'none';
  }
  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if(connectedEmail.value === ''){
  // Nếu email trống
  NoneBlockResult.style.display= 'block';
  ConnectedResult.style.backgroundColor = 'red';
  ConnectedResult.style.color = '#fff';
  ConnectedResult.innerHTML = 'Vui lòng điền email';
  setTimeout(NoneBlockResult,2000);
  } else if (!emailRegex.test(connectedEmail.value)) {
  // Nếu email không đúng định dạng
  NoneBlockResult.style.display= 'block';
  ConnectedResult.style.backgroundColor = 'yellow';
  ConnectedResult.style.color = '#000000';
  ConnectedResult.innerHTML = 'Vui lòng điền đúng định dạng email';
  setTimeout(NoneBlockResult,2000);
  } else {
  // Nếu email đúng định dạng
  // Tiến hành xử lý logic
  NoneBlockResult.style.display= 'block';
  ConnectedResult.style.backgroundColor = '#00ff00';
  ConnectedResult.style.color = '#000000';
  ConnectedResult.innerHTML = 'Gửi thành công !';
  connectedEmail.value = '';
  setInterval(NoneBlockResult,2000);
  }
  })



