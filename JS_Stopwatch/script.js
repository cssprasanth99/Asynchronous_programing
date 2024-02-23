let seconds = 0;
let minutes = 0;
let hours = 0;
let startbtn = document.getElementById("start-btn");
let stopbtn = document.getElementById("stop-btn");
let resetbtn = document.getElementById("reset-btn");
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000)
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime.innerHTML
        = "00:00:00"
}

startbtn.addEventListener("click", () => {
    watchStart();
})

stopbtn.addEventListener("click", () => {
    watchStop();
})

resetbtn.addEventListener("click", () => {
    watchReset();
})