setInterval(setClock, 1000)

const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand')

function setClock(){
    const currentTime = new Date();
    const secondsRatio = currentTime.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentTime.getHours()) / 12

    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
}

function setRotation(e, rotationRatio){
    e.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()