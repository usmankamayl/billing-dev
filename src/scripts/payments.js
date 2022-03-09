const rightPaymentsFields = document.querySelector('.right__payments-fields');
const companyDescriptors = document.getElementById('companies');
rightPaymentsFields.innerHTML = '';

function writePayments(payment) {
    const companyDescriptor = companyDescriptors.querySelector(`[data-id="${payment.id}"]`);
    const rightPayments = Array.from(document.querySelectorAll('.right__payments-field'));
    const index = rightPayments.findIndex(el => el.dataset.id === payment.id)
   if (index !== -1) {
       rightPayments[index].remove();
       rightPaymentsFields.insertAdjacentHTML('afterbegin', `<p class="right__payments-field" data-id="${payment.id}">
              <label>
                <input type="checkbox" />
                <span>${companyDescriptor.textContent}</span>
              </label>
            </p>`);
   } else {
               rightPaymentsFields.insertAdjacentHTML('afterbegin', `<p class="right__payments-field" data-id="${payment.id}">
              <label>
                <input type="checkbox" />
                <span>${companyDescriptor.textContent}</span>
              </label>
            </p>`);
   }

}

export default writePayments;
