document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositValue = getInputValueById('deposit-input');
    const previewsDepositValue = getElementValueById('previous-deposit');

    const currentDepositValue = depositValue + previewsDepositValue;

    getTotalValue('previous-deposit', currentDepositValue);


    const previousBalanceValue = getElementValueById('previous-balance');
    const currentBalanceValue = depositValue + previousBalanceValue;

    getTotalValue('previous-balance', currentBalanceValue)
})