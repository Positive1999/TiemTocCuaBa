var sliderImg = document.querySelector('.slider img');

changeImg2 = function(){
    sliderImg.src = 'images/banner.jpg';
    setTimeout(changeImg, 3000); // Thay đổi ảnh sau 3 giây
}

changeImg = function(){
    sliderImg.src = 'images/banner2.jpg';
    setTimeout(changeImg2, 3000); // Thay đổi ảnh sau 3 giây
}

changeImg(); // Bắt đầu thay đổi ảnh



