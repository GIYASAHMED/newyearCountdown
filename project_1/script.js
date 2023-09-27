const day = document.querySelector('#day')
const hou = document.querySelector('#hour')
const minute = document.querySelector('#min')
const seconds = document.querySelector('#sec')

const newYear = "1 JANUARY 2024"

function countdown(){
    const newyearDate = new Date(newYear)
    const currentYear = new Date()

    const diff = newyearDate - currentYear

    const totalSeconds = diff / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hour = Math.floor(totalSeconds / 3600) % 24
    const min = Math.floor(totalSeconds / 60) % 60 
    const sec = Math.floor(totalSeconds) % 60
    

    day.innerHTML = formate(days)
    hou .innerHTML = formate(hour)
    minute.innerHTML = formate(min)
    seconds.innerHTML = formate(sec)
}

function formate(time){
    return time < 10 ? "0"+ time : time
}

countdown()
setInterval(countdown, 1000)