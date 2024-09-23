const display = document.getElementById("timer");
const startBtn = document.getElementById("startBtn")
let timer = null;
let countdown = 50*1000*60;
let startTime = Date.now() + countdown;
let elapsedTime = countdown;
let isRunning = false;


function start() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = startTime - Date.now();
        isRunning = false;
        startBtn.textContent = `Start`;
    }
    else {
        startTime = Date.now() + elapsedTime;
        update();
        timer = setInterval(update, 900);
        isRunning = true;
        startBtn.textContent = `Stop`;
    }
  
}

function reset() {
    clearInterval(timer);
    countdown= 50*1000*60;
    elapsedTime = countdown;
    isRunning = false;
    startTime = Date.now() + countdown;

    hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    seconds = Math.floor(elapsedTime / 1000 % 60);
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    startBtn.textContent = `Start`;
}

function update() {
    
    const currentTime = Date.now();
    elapsedTime = startTime - currentTime;

    if (elapsedTime <=0 ) {
        clearInterval(timer);
        display.textContent = "50:00";
        startBtn.textContent = `Start`;
        isRunning = false;
        reset();
        return;
    }

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);

    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
