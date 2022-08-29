// Home score
let home_score = 0
let home_score_el = document.getElementById("home_score")

function plus1_home() {
    home_score += 1
    home_score_el.innerText = home_score
}
function plus2_home() {
    home_score += 2
    home_score_el.innerText = home_score
}
function plus3_home() {
    home_score += 3
    home_score_el.innerText = home_score
}

// Guest score
let guest_score = 0
let guest_score_el = document.getElementById("guest_score")

function plus1_guest() {
    guest_score += 1
    guest_score_el.innerText = guest_score
}
function plus2_guest() {
    guest_score += 2
    guest_score_el.innerText = guest_score
}
function plus3_guest() {
    guest_score += 3
    guest_score_el.innerText = guest_score
}

// Reset score
function reset_score() {
    home_score = 0
    guest_score = 0
    
    home_score_el.innerText = home_score
    guest_score_el.innerText = guest_score
}
