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

function book() {
    var inputName = document.getElementById('name');
    var cutTypeSelect = document.getElementById('cut-type');
    var inputDay = document.getElementById('day');
    var inputPhone = document.getElementById('phone');
    var inputMail = document.getElementById('mail');

    if (
        inputName.value === '' ||
        cutTypeSelect.value === '' ||
        inputDay.value === '' ||
        inputPhone.value === '' ||
        inputMail.value === ''
    ) {
        openModal('Bạn cần nhập đủ thông tin!');
    } else {
        openModal('Đặt lịch thành công!');
    }

    inputName.value = '';
    cutTypeSelect.value = '';
    inputDay.value = '';
    inputPhone.value = '';
    inputMail.value = '';
}
