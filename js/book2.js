var isMessageSent = false;

function openModal(message) {
    var modal = document.querySelector('.modal');
    var modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';

    if (isMessageSent) {
        // Nếu tin nhắn đã được gửi thành công, hiển thị thông báo thành công
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

    if (
        inputName.value === '' ||
        cutTypeSelect.value === '' ||
        inputDay.value === '' ||
        inputPhone.value === ''
    ) {
        openModal('Bạn cần nhập đủ thông tin!');
    } else {
        var recipientPhone = '0375811525'; 
        var message =
            'Thông báo mới:\n\nTên người dùng: ' +
            inputName.value +
            '\nKiểu cắt: ' +
            cutTypeSelect.value +
            '\nNgày cắt: ' +
            inputDay.value +
            '\nSố điện thoại: ' +
            inputPhone.value;

        // Gửi tin nhắn qua Zalo
        ZaloSocialSDK.sendMessageToPhoneNumber(
            recipientPhone,
            message,
            function (response) {
                if (response && response.error === 0) {
                    isMessageSent = true; 
                    openModal('Đặt lịch thành công!');
                } else {
                    openModal('Đặt lịch thất bại!');
                }
            }
        );
    }

    inputName.value = '';
    cutTypeSelect.value = '';
    inputDay.value = '';
    inputPhone.value = '';
}