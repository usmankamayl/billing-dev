import {tarifs} from "./constants";

export const companies = document.querySelectorAll('.left__company');
export const paymentTitle = document.querySelector('.center__title');
export const paymentDesc = document.querySelector('.center__desc');

function choiceService(payment) {
    for(let item of companies) {
        item.classList.remove('selected');
    }
    companies[1].classList.add('selected');
    payment.id = 'water';
    companies.forEach(item => {
        item.addEventListener('click', () => {
            for(let item of companies) {
                item.classList.remove('selected');
            }

            item.classList.add('selected');
            payment.id = item.dataset.id;
            const p = item.querySelector('p');
            paymentTitle.textContent = p.textContent;

            if (p.dataset.id === 'taxes') {
                paymentDesc.textContent = 'Оплатите налоги по полной!';
            }

            if (p.dataset.id === 'water') {
                paymentDesc.textContent = 'Оплата холодного водоснабжения';
            }

            if (p.dataset.id === 'internet') {
                paymentDesc.textContent = 'Оплата интернета';
            }

            if (p.dataset.id === 'security') {
                paymentDesc.textContent = 'Ну куда уж без охраны';
            }

            if (p.dataset.id === 'exchange') {
                paymentDesc.textContent = 'Если есть валюта, то меняй ее смело';
            }
        });
    });
}

export default choiceService;
