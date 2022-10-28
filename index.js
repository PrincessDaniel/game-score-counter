// document.getElementById .textContent
let count = 0
let score = 0
let counter1 = document.getElementById("home")
let counter2 = document.getElementById("guest")

function homeScore1() {
    count += 1
    counter1.textContent = count
}

function homeScore2() {
    count += 2
    counter1.textContent = count
}

function homeScore3() {
    count += 3
    counter1.textContent = count
}

function guestScore1() {
    score += 1
    counter2.textContent = score
}

function guestScore2() {
    score += 2
    counter2.textContent = score
}

function guestScore3() {
    score += 3
    counter2.textContent = score
}

function reset() {
    counter1.textContent = 0
    counter2.textContent = 0
}