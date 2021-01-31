const startButtonRef = document.querySelector('[data-action="start"]');
const stopButtonRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startButtonRef.addEventListener('click', bodyColorChangerHandler);
stopButtonRef.addEventListener('click', stoppingChangeBodyColor);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function bodyColorChangerHandler() {
    if (intervalId !== null) { 
        return;
    }
    return intervalId = setInterval(bodyColorChanger, 1000);
}

function bodyColorChanger() { 
    const randomColorIndex = randomIntegerFromInterval(1, colors.length) - 1;
    bodyRef.style.backgroundColor = `${colors[randomColorIndex]}`;
}

function stoppingChangeBodyColor() { 
    clearInterval(intervalId);
    return intervalId = null;
}
