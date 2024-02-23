const minutesBlock = document.querySelector('.minutes');
const secondsBlock = document.querySelector('.seconds');
const hundretsBlock = document.querySelector('.hundrets-secondths');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let interval;
let seconds = 1;
let minutes = 0;
let milliseconds = 0;

const startTimer = function () {
    milliseconds++;
    if (milliseconds % 10 == 0)
        hundretsBlock.innerHTML = milliseconds++;

    if (milliseconds > 99) {
        milliseconds = 0;

        if (seconds < 10) {
            secondsBlock.innerHTML = '0' + seconds++;
        }
        else
            secondsBlock.innerHTML = seconds++;

    }

    if (seconds > 59) {
        seconds = 0;
        if (minutes < 10) {
            minutesBlock.innerHTML = '0' + minutes++;
        }
        else
            minutesBlock.innerHTML = minutes++;
    }

}

startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 1;
    minutes = 0;
    milliseconds = 0;
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    hundretsBlock.innerHTML = '00';
});