document.getElementById('diposit-btn').addEventListener('click', function () {

    // Take Diposite Ammount 
    let diposit = document.getElementById('diposit-inp');
    let dipositAmount = diposit.value;

    if (dipositAmount > 0) {
        console.log(dipositAmount);
        diposit.value = '';

        // Update Diposite value 
        let previousDiposit = document.getElementById('diposit-amount');

        // Update Diposit Balance 
        let previousDipositValue = previousDiposit.innerText;
        let totalDiposite = parseFloat(previousDipositValue) + parseFloat(dipositAmount);
        previousDiposit.innerText = totalDiposite;

        // Update Balance
        let preBalance = document.getElementById('balance-amount');
        let preBalanceValue = preBalance.innerText;
        let totalBalance = parseFloat(preBalanceValue) + parseFloat(dipositAmount);
        preBalance.innerText = totalBalance;
    }
    else {
        diposit.value = '';
    }

});


// Withdraw Balance 

document.getElementById('withdraw-btn').addEventListener('click', function () {

    let withdraw = document.getElementById('withdraw-inp');
    let withdrawValue = withdraw.value;
    if (withdrawValue > 0) {
        withdraw.value = '';
        console.log(withdrawValue);
        let preWithdraw = document.getElementById('withdraw-amount');
        let preWithdrawValue = preWithdraw.innerText;
        let totalWithdraw = parseFloat(preWithdrawValue) + parseFloat(withdrawValue);
        preWithdraw.innerText = totalWithdraw;

        // Total Balance 
        let preBalance = document.getElementById('balance-amount');
        let preBalanceValue = preBalance.innerText;

        if (parseFloat(preBalanceValue) > parseFloat(withdrawValue)) {
            let totalBalance = parseFloat(preBalanceValue) - parseFloat(withdrawValue);
            preBalance.innerText = totalBalance;
        }
        else {
            preWithdraw.innerText = 'Not Enough Money';
        }
    }
    else {
        withdraw.value = '';
    }

});
