let btnStart = document.querySelector(".btn .start");
let btnStop = document.querySelector(".btn .stop");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let timerId = null;
let isRunning = false;

btnStop.addEventListener("click", () => {
    isRunning = false;
     
    clearTimeout(timerId);
    
    hour.innerText = 0;
    minute.innerText = 0;
    second.innerText = 0;
})





btnStart.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        getTime();
    }
});


function getTime() {
    let hr = new Date();

    let hours = hr.getHours();
    hour.innerText = hours

    let minutes = hr.getMinutes();
    minute.innerText = minutes;

    let seconds = hr.getSeconds();
    second.innerText = seconds;

    if (isRunning) {
        timerId = setTimeout(getTime, 1000);
    }

}

