
function updateClock() {
    const now = new Date()
    let hours = now.getHours()
    const meridiem = hours >= 12 ? `PM` : `AM`
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0)

    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`

    document.getElementById("clock").textContent = timeString;
}

updateClock()
setInterval(updateClock, 1000)

var numberHours = document.querySelector(".number_hours");
var secondsBar = document.querySelector(".seconds_bar");

var numberElement = [];
var barElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
    barElement.push(`<span style="--index:${i}"><p></p></span>`);
}
secondsBar.insertAdjacentHTML("afterbegin", barElement.join(""));

// Time
const handHours = document.querySelector(".hand.hour");
const handMinutes = document.querySelector(".hand.minute");
const handSeconds = document.querySelector(".hand.second");

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currntMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currntMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currntMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;

    // Sound effect for second hand
    let sound = new Audio("./audio/sound.wav");
    sound.play();
}

getCurrentTime();
setInterval(getCurrentTime, 1000); // 1000ms = 1s
