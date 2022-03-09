import { tarifs } from './constants';
import addPaymentToPay from "./paymentsToPay";
import writePayments from "./payments";
import getTotalAmount from "./totalAmount";
const btnToSave = document.querySelector('.form__footer  .btn');
const rightPaymentsFields = document.querySelector('.right__payments-fields');

function savePayment(payment, payments) {
    const listTotal = document.querySelector('.list__total');
    const price = listTotal.querySelector('b');

    btnToSave.addEventListener('click', (e) => {
        e.preventDefault();
        let amount = Math.floor((payment.current - payment.previous) * tarifs[payment.id] * 1000 / 1000);
        payment.amount = amount;
        const idx = payments.findIndex(el => el.id === payment.id);
        if (idx !== -1) {
            const listItems = Array.from(document.querySelectorAll('.list__item:not(:last-child)'));
            payments.splice(idx, 1, Object.defineProperties({}, Object.getOwnPropertyDescriptors(payment)));
            listItems.forEach(item => {
                if (item.dataset.id === payment.id) {
                    item.remove();
                    addPaymentToPay(payment);
                    writePayments(payment);
                }

            })
        } else {
            payments.push(Object.defineProperties({}, Object.getOwnPropertyDescriptors(payment)));
            addPaymentToPay(payment);
            writePayments(payment);
        }

        document.querySelector('#previous').value = '';
        document.querySelector('#current').value = '';
        getTotalAmount(payment, payments);
        localStorage.setItem('payments', JSON.stringify(payments));

    })
}
export default savePayment;
