var sliderImg = document.querySelector('.slider img');
var images = ['images/banner.jpg', 'images/banner2.jpg'];
var index = 0;

setInterval(function() {
  sliderImg.style.transition = '0.8s';
  sliderImg.src = images[index];
  index = (index + 1) % images.length;
}, 3000);


var connectedEmail = document.querySelector('.connected #email');
var NoneBlockResult = document.querySelector('.Notification');
var ConnectedResult = document.querySelector('.Notification__result');
const btnSubmitConnected = document.querySelector('.btn-connected');

btnSubmitConnected.addEventListener('click', async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (connectedEmail.value === '') {
    NoneBlockResult.style.display = 'block';
    ConnectedResult.style.backgroundColor = 'red';
    ConnectedResult.style.color = '#fff';
    ConnectedResult.innerHTML = 'Vui lòng điền email';
    
    await delay(2000);
    NoneBlockResult.style.display = 'none';
  } else if (!emailRegex.test(connectedEmail.value)) {
    NoneBlockResult.style.display = 'block';
    ConnectedResult.style.backgroundColor = 'yellow';
    ConnectedResult.style.color = '#000000';
    ConnectedResult.innerHTML = 'Vui lòng điền đúng định dạng email';
    
    await delay(2000);
    NoneBlockResult.style.display = 'none';
  } else {
    NoneBlockResult.style.display = 'block';
    ConnectedResult.style.backgroundColor = '#00ff00';
    ConnectedResult.style.color = '#000000';
    ConnectedResult.innerHTML = 'Gửi thành công !';
    connectedEmail.value = '';
    
    await delay(2000);
    NoneBlockResult.style.display = 'none';
  }
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



