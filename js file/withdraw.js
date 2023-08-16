document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = getInputValueById('withdraw-field');
    const perviewsWithdraw = getElementValueById('previous-withdraw')
    const currentWithdrawTotal = withdrawField + perviewsWithdraw;


    getTotalValue('previous-withdraw', currentWithdrawTotal)

    const previousBalanceValue = getElementValueById('previous-balance')
    const currentBalanceValue = previousBalanceValue - withdrawField;

    getTotalValue('previous-balance', currentBalanceValue)


})