// javascript
let hScore = 0
let gScore = 0

let homeScore = document.getElementById("home-score-el")

let guestScore = document.getElementById("guest-score-el")

// button functions

// functions for home team score
function add1(){
    hScore+=1
    homeScore.textContent = hScore
    
}

function add2(){
    hScore+=2
    homeScore.textContent = hScore
    
}

function add3(){
    hScore+=3
    homeScore.textContent = hScore
    
}

// functions for away team score

function add1G(){
    gScore+=1
    guestScore.textContent = gScore
    
}

function add2G(){
   gScore+=2
    guestScore.textContent = gScore
    
}

function add3G(){
    gScore+=3
    guestScore.textContent = gScore
    
}