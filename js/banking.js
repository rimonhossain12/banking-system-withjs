// handle deposit amount
document.getElementById('deposit-button').addEventListener('click', function () {

    // console.log('deposit button is click');
    const depositInput = document.getElementById('deposit-input');
    const depositInputTotal = parseFloat(depositInput.value);

    if (depositInputTotal > 0) {
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
    } else {
        // clean the input value;
        depositInput.value = '';

    }


});


// handle in withdraw amount;

document.getElementById('withdraw-button').addEventListener('click', function () {
    const depositInputValue = document.getElementById('withdraw-input');
    const depositInputValueText = depositInputValue.value;
    if (depositInputValueText < 0) {
        console.log('invalid');
        depositInputValue.value = '';
    } else {
        // withdraw-input 
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawInputText = withdrawInput.value;
        const withdrawInputTotal = parseFloat(withdrawInputText);

        console.log('withdraw-input', withdrawInputTotal);
        // update current balance
        const currentBalance = document.getElementById('balance-total');
        const currentBalanceText = currentBalance.innerText;
        const currentBalanceTotal = parseFloat(currentBalanceText);
        console.log('balance-total', currentBalanceTotal)

        // withdraw total balance
        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawTotalInput = withdrawTotal.innerText;
        const withdrawTotalAmount = parseFloat(withdrawTotalInput);
        console.log('withdraw-total', withdrawTotalAmount);

        // if (currentBalanceTotal < withdrawInputTotal && withdrawInputTotal <= 0) {
        const totalWithdrawBalance = withdrawInputTotal + withdrawTotalAmount;

        withdrawTotal.innerText = totalWithdrawBalance;
        currentBalance.innerText = currentBalanceTotal - withdrawInputTotal;
        // clean the input value

        // }
        withdrawInput.value = '';
    }


});