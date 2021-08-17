// select deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button is click');
    const depositInput = document.getElementById('deposit-input');
    const depositInputTotal = parseFloat(depositInput.value);


    // select depoist before value

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;


    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositInputTotal;

    depositInput.value = '';



})