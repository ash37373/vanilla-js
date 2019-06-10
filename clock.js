const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".clock");


function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours} : ${minute < 10 ? `0${minute}`: minute} : ${seconds < 10 ? `0${seconds}`:seconds}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();