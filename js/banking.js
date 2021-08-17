// select deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button is click');
    const depositInput = document.getElementById('deposit-input');
    const depositInputTotal = parseFloat(depositInput.value);
    // select depoist before value
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    const totalDepositBalanceAmount = depositTotalAmount + depositInputTotal;
    depositTotal.innerText = totalDepositBalanceAmount;
    depositInput.value = '';


    // update current balance

    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    // const currentBalanceText = parseFloat(currentBalance.innerText);

    currentBalance.innerText = currentBalanceTotal + depositInputTotal;



})