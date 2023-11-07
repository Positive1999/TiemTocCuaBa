  // Lấy thời gian hiện tại
  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  // Kiểm tra nếu thời gian hiện tại nằm trong khoảng mở cửa
  if (currentHour >= 8 && currentHour < 18) {
    document.getElementById("openStatus").classList.remove("d-none"); // Hiển thị phần tử mở cửa
    document.getElementById("closeStatus").classList.add("d-none"); // Ẩn phần tử đóng cửa
  } else {
    document.getElementById("openStatus").classList.add("d-none"); // Ẩn phần tử mở cửa
    document.getElementById("closeStatus").classList.remove("d-none"); // Hiển thị phần tử đóng cửa
  }