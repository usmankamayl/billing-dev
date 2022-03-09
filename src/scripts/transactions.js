import getTotalAmount from "./totalAmount";
const btnToPayPayments = document.querySelector('.right__payments-footer .btn');
export const transactionsItem = document.querySelector('.transactions__list .list__item');
export const transactionsItemError = document.querySelector('.transactions__list .list__item-error');
transactionsItem.style.display = 'none';
transactionsItemError.style.display = 'none';
function payPayments(balance, payments) {
    btnToPayPayments.addEventListener('click', (e) => {
        e.preventDefault();
        transactionsItem.style.display = 'none';
        transactionsItemError.style.display = 'none';
        const rightPayments = Array.from(document.querySelectorAll('.right__payments-field'));
        const listItems = Array.from(document.querySelectorAll('.form__summary-list .list__item:not(:last-child)'));
        const checkedPaymentsId = [];

        rightPayments.forEach(el => {
            if (el.querySelector('input').checked) {
                checkedPaymentsId.push(el.dataset.id);
            }
        });


        const paymentsToPay = payments.filter(el => checkedPaymentsId.indexOf(el.id) > -1);

        const sumToPay = paymentsToPay.reduce(function (sum, current)  {
            return   sum + current.amount;
        }, 0);

        if (balance - sumToPay > 0) {
            transactionsItem.style.display = 'block';
            rightPayments.forEach(el => {
                if (el.querySelector('input').checked) {
                    const index = payments.findIndex(payment => payment.id === el.dataset.id);
                    payments.splice(index, 1);
                    el.remove();
                    getTotalAmount(payments[index], payments);
                    localStorage.clear();
                    localStorage.setItem('payments', JSON.stringify(payments));
                }
            });

            listItems.forEach(el => {
                paymentsToPay.forEach(item => {
                    if (el.dataset.id === item.id) {
                        el.remove();
                    }
                })
            })

        } else {
            transactionsItemError.style.display = 'block';
        }

    })


}

export default payPayments;
