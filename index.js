const refs = {
    time: document.querySelector('.time'),
    input: document.querySelector('input'),
    btnBox: document.querySelector('.btn-box'),
};

refs.time.textContent = 0;
refs.input.value = 30;
let intervalId;
refs.btnBox.addEventListener('click', onBtn);

function substracTime() {
    if (refs.time.innerHTML > 0) {
        refs.time.innerHTML--
    }
}

function onBtn(e) {
    console.log(e.target.classList.contains('start'));
    console.log(e.target.classList.contains('stop'));
    console.log(e.target.classList.contains('clear'));

    if (e.target.classList.contains('start')) {
        refs.time.innerHTML = refs.input.value;
        refs.input.value = '';
        clearInterval(intervalId);
        intervalId = setInterval(substracTime, 1000);
    }
    if (e.target.classList.contains('stop')) {
        clearInterval(intervalId);
    }
    if (e.target.classList.contains('clear')) {
        refs.time.innerHTML = 0;
        refs.input.value = '';
    }
}

