// select deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button is click');
    const depositInput = document.getElementById('deposit-input').value;
    const depositInputTotal = parseFloat(depositInput);


    // select depoist before value

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;


    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositInputTotal;



})