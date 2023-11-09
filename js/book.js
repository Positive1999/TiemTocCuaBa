var isEmailSent = false;

function openModal(message) {
    var modal = document.querySelector('.modal');
    var modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';

    if (isEmailSent) {
        // Nếu email đã được gửi thành công, hiển thị thông báo thành công
        closeModal();
    }
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function book(event) {
    event.preventDefault();

    var inputName = document.getElementById('name');
    var cutTypeSelect = document.getElementById('cut-type');
    var inputDay = document.getElementById('day');
    var inputPhone = document.getElementById('phone');
    var inputAddress = document.getElementById('address');

    if (
        inputName.value === '' ||
        cutTypeSelect.value === '' ||
        inputDay.value === '' ||
        inputPhone.value === '' ||
        inputAddress.value === ''
    ) {
        openModal('Bạn cần nhập đủ thông tin!');
    } else {
        var shopEmail = 'hieutran11525@gmail.com';
        var subject = 'Đặt lịch mới từ khách hàng';

        var body =
            'Thông báo mới:\n\nTên người dùng: ' +
            inputName.value +
            '\nKiểu cắt: ' +
            cutTypeSelect.value +
            '\n Ngày cắt: ' +
            inputDay.value +
            '\nSố điện thoại: ' +
            inputPhone.value +
            '\nĐịa chỉ: ' +
            inputAddress.value;

        var mailtoLink =
            'mailto:' +
            shopEmail +
            '?subject=' +
            encodeURIComponent(subject) +
            '&body=' +
            encodeURIComponent(body);

        isEmailSent = false; // Đặt giá trị cờ là false trước khi gửi email

        // Chuyển hướng đến liên kết mailto sau khi hiển thị thông báo thành công
        openModal('Đặt lịch thành công!');
        window.location.href = mailtoLink;
    }

    inputName.value = '';
    cutTypeSelect.value = '';
    inputDay.value = '';
    inputPhone.value = '';
    inputAddress.value = '';
}


