function getTotalAmount(payment, payments) {
    const totalAmount = document.querySelector('li.list__item.list__total b');
    totalAmount.textContent = payments.reduce(function (amount, payment)  {
        return   amount + payment.amount;
    }, 0);
}

export default getTotalAmount;
