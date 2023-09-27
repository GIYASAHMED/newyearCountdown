const day = document.querySelector("#day")
const hour = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")

let newYear = "1 jan 2024"

function newYearCountDown(){
    let newYearfN = new Date(newYear)
    let currentYear = new Date()

    let diff = newYearfN - currentYear

    let totalSeconds = diff /1000

    let days = Math.floor((totalSeconds / 3600) /24)
    let hours = Math.floor((totalSeconds /3600) % 24)
    let minutes = Math.floor((totalSeconds / 60) % 60)
    let seconds = Math.floor(totalSeconds % 60)

    day.innerHTML = setAtbr(days)
    hour.innerHTML = setAtbr(hours)
    min.innerHTML = setAtbr(minutes)
    sec.innerHTML = setAtbr(seconds)

    endint()
    
    
}

function setAtbr(time){
    return time < 10 ? "0"+time : time
}

function endint(){
    if(day.innerHTML == "00" && hour.innerHTML == "00" && min.innerHTML == "00" && sec.innerHTML == "00"){
        clearInterval(int)
        document.querySelector('.timer_container').innerHTML = `<h1>WELCOME 2024</h1>`
    }
}




newYearCountDown()
const int = setInterval(newYearCountDown, 1000)
