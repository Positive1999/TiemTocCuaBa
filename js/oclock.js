var currentTime = new Date();
var currentHour = currentTime.getHours();

if (currentHour >= 8 && currentHour < 12 || currentHour >= 14 && currentHour < 19) {
  document.getElementById("openStatus").classList.remove("d-none"); // Hiển thị phần tử mở cửa
  document.getElementById("closeStatus").classList.add("d-none"); // Ẩn phần tử đóng cửa
}else{
  document.getElementById("openStatus").classList.add("d-none"); // Ẩn phần tử mở cửa
  document.getElementById("closeStatus").classList.remove("d-none"); // Hiển thị phần tử đóng cửa
}

var oclock = document.querySelector('.oclock');
var oclocDetail = document.querySelector('.oclock-detail');

oclock.addEventListener('mouseover',()=>{
  oclocDetail.classList.add('to');
}) 
oclock.addEventListener('mouseout',()=>{
  oclocDetail.classList.remove('to');
}) 

 
