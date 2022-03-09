import '../styles/index.scss';
import { tarifs } from './constants';
import choiceService from './services';
import getOption from './meters';
import savePayment from './payment';
import clearPayments from './clearPayments';
import payPayments from "./transactions";
import addPaymentToPay from "./paymentsToPay";
import writePayments from "./payments";
import getTotalAmount from "./totalAmount";



let balance = 100;
const payment = {};
let payments =JSON.parse(localStorage.getItem('payments')) || [];
    for (let i = 0; i < payments.length; i++) {
        const payment = payments[i];
        addPaymentToPay(payment);
        writePayments(payment);
    }
    getTotalAmount(payment, payments);

choiceService(payment);
getOption(payment);
savePayment(payment, payments);
clearPayments(payments);
payPayments(balance, payments);



