const formList = document.querySelector('.form__summary-list');
const listItems = formList.querySelectorAll('.list__item:not(:last-child)');

formList.innerHTML = ' <li class="list__item list__total">\n' +
    '                <p><span class="list__item-label">Всего</span>\n' +
    '                  <span class="price">$ <b>0</b></span>\n' +
    '                </p>\n' +
    '              </li>';


function addPaymentToPay(payment) {
    const listItem = `<li class="list__item" data-id=${payment.id}>
         <p><span class="list__item-label">${payment.meterId}</span>
           <span class="price">$ <b>${payment.amount}</b></span>
         </p>
       </li>`;

    formList.insertAdjacentHTML('afterbegin', listItem);
}

export default addPaymentToPay;



