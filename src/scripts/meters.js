//2 task
const meter = document.getElementById('meters');
const dataPrevious = document.querySelector('#previous');
const dataCurrent = document.querySelector('#current');


function getOption(payment) {
    payment.meterId = meter.value;
    meter.addEventListener('change', () => {
        payment.meterId = meter.value;
    });
    dataPrevious.addEventListener('change', () => {
        if(dataPrevious.value > 0) {
            payment.previous = dataPrevious.value;
        } else {
            alert ('Заполните форму правильно');
        }
    });
    dataCurrent.addEventListener('change', () => {
        if(dataCurrent.value > 0 && dataCurrent.value > dataPrevious.value) {
            payment.current = dataCurrent.value;
        } else {
            alert ('Заполните форму правильно');
        }
    });

}

export default getOption;
