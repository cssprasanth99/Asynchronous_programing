let timer;
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let display = document.getElementById("display");
let start = document.getElementById("button-start");
let stop = document.getElementById("button-stop");
let reset = document.getElementById("button-reset");

start.addEventListener("click", () => {
    startTimer();
})

function startTimer() {
    if (timer) {
        clearInterval(timer);
    }
    let h = parseInt(hours.value) || 0;
    let m = parseInt(minutes.value) || 0;
    let s = parseInt(seconds.value) || 0;

    let totalSeconds = h * 3600 + m * 60 + s;

    timer = setInterval(() => {
        totalSeconds--;
        if (totalSeconds >= 0) updateTimer(totalSeconds);
        else {
            clearInterval(timer);
            resetTimer();
        }
    }, 1000);
}

function updateTimer(totalSeconds) {

    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds - h * 3600) / 60);
    let s = totalSeconds - h * 3600 - m * 60;

    //console.log(h, m, s);

    display.innerText = `${h}:${m}:${s}`;
}

stop.addEventListener("click", function () {
    stopTimer();
})


function stopTimer() {

    let display1 = display.innerText;
    console.log(display1);
    clearInterval(timer);
}

reset.addEventListener("click", () => {
    resetTimer()
})

function resetTimer() {
    clearInterval(timer);
    hours.value = "0";
    minutes.value = "0";
    seconds.value = "0";
    updateTimer(0);
}