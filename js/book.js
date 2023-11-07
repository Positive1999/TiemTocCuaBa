function openModal(message) {
    var modal = document.querySelector('.modal');
    var modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function book(event) {
    event.preventDefault(); // Ngăn chặn mặc định của form (tải lại trang)

    var inputName = document.getElementById('name');
    var cutTypeSelect = document.getElementById('cut-type');
    var inputDay = document.getElementById('day');
    var inputPhone = document.getElementById('phone');
    // var inputMail = document.getElementById('mail');

    if (
        inputName.value === '' ||
        cutTypeSelect.value === '' ||
        inputDay.value === '' ||
        inputPhone.value === '' ||
        // inputMail.value === ''
    ) {
        openModal('Bạn cần nhập đủ thông tin!');
    } else {
        openModal('Đặt lịch thành công!');
        var shopEmail = "hieutran11525@gmail.com";
        var subject = "Đặt lịch mới từ khách hàng";
      
        var body = "Thông báo mới:\n\nTên người dùng: " +
        inputName.value + "\nKiểu cắt: " + cutTypeSelect.value + "\n Ngày cắt: " + inputDay.value + "\nSố điện thoại: "+inputPhone.value;
      
        var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailtoLink;
    }

    inputName.value = '';
    cutTypeSelect.value = '';
    inputDay.value = '';
    inputPhone.value = '';
    // inputMail.value = '';
}



//contact
// function submitContact() {
//     var shopEmail = "huongjennyarjes@gmail.com";
//     var subject = "Liên hệ mới từ khách hàng";
  
//     var nameInput = document.getElementById('name');
//     var name = nameInput.value; 
  
//     var emailInput = document.getElementById('email');
//     var email = emailInput.value;
  
//     var messageInput = document.getElementById('message');
//     var message = messageInput.value;
  
//     if (name === '' || email === '' || message === '') {
//       alert("Vui lòng nhập đầy đủ thông tin.");
//       return;
//     }
  
//     var body = "Thông báo mới:\n\nTên người dùng: " +
//       name + "\nEmail: " + email + "\nMessage: " + message;
  
//     var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
//     window.location.href = mailtoLink;
//   }
  // het contact