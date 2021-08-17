// handle deposit amount
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


    // update current balance

    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    // const currentBalanceText = parseFloat(currentBalance.innerText);

    currentBalance.innerText = currentBalanceTotal + depositInputTotal;



    // clean the input value;
    depositInput.value = '';
});


// handle in withdraw amount;

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputTotal = parseFloat(withdrawInput.value);
    // console.log(withdrawInputTotal);

    // withdraw amount totla
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalInput = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalInput);
    // console.log(withdrawTotalAmount);

    // update balance
    withdrawTotal.innerText = withdrawInputTotal + withdrawTotalAmount;

    // clean the input value
    withdrawInput.value = '';
})