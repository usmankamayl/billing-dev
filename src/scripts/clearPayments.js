const formList = document.querySelector('.form__summary-list');
const btnOutline = document.querySelector('.btn-outline');


function clearPayments(payments) {
    btnOutline.addEventListener('click', () => {
        document.querySelector('.right__payments-fields').innerHTML = '';
        payments.length = 0;
        formList.innerHTML = ' <li class="list__item list__total">\n' +
            '                <p><span class="list__item-label">Всего</span>\n' +
            '                  <span class="price">$ <b>0</b></span>\n' +
            '                </p>\n' +
            '              </li>'

        localStorage.clear();
    })
}

export default clearPayments;
