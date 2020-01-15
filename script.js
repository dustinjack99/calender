const time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const timeSlot = document.querySelector(".timeslot");
const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
const date = document.querySelector("#date");
date.textContent = moment().format('llll');


for (i = 0; i < hours.length; i++) {
    let div = document.createElement("div");
    let save = document.createElement("button");
    let input = document.createElement("textarea");
    timeSlot.appendChild(div);
    div.innerText = hours[i];
    div.setAttribute("class", time[i]);
    save.innerText = "Save";
    save.setAttribute("class", "button");
    save.setAttribute("value", hours[i]);
    input.setAttribute("class", "input");
    div.appendChild(input);
    div.appendChild(save);
    let hour = JSON.parse(localStorage.getItem(hours[i]));
    if (hour === null) hour = [];
    localStorage.setItem(hours[i], JSON.stringify(hour));
    input.innerText = JSON.parse(localStorage.getItem(hours[i]));

}
///event listeners on all text areas
let text = document.querySelectorAll("textarea");
    
text[0].addEventListener('input', update0);
text[1].addEventListener('input', update1);
text[2].addEventListener('input', update2);
text[3].addEventListener('input', update3);
text[4].addEventListener('input', update4);
text[5].addEventListener('input', update5);
text[6].addEventListener('input', update6);
text[7].addEventListener('input', update7);
text[8].addEventListener('input', update8);

///updates the textareas, adding text value to them
function update0 (e) {
    text[0].textContent = e.target.value;
}
function update1 (e) {
    text[1].textContent = e.target.value;
}
function update2 (e) {
    text[2].textContent = e.target.value;
}
function update3 (e) {
    text[3].textContent = e.target.value;
}
function update4 (e) {
    text[4].textContent = e.target.value;
}
function update5 (e) {
    text[5].textContent = e.target.value;
}
function update6 (e) {
    text[6].textContent = e.target.value;
}
function update7 (e) {
    text[7].textContent = e.target.value;
}
function update8 (e) {
    text[8].textContent = e.target.value;
}

let buttons = document.querySelectorAll(".button");
document.addEventListener('click', function (e) {
    
    for (i = 0; i < buttons.length; i++) {
    if (e.target === buttons[i]) {
            var entry = text[i].textContent;
            localStorage.setItem(buttons[i].value, JSON.stringify(entry));
        }   
    }
    
})

function colorChange () {
    for (i = 0; i < buttons.length; i++) {
        if (time[i] < moment().hour()) {
            var bla = document.getElementsByClassName(`${time[i]}`);
            bla[0].style.backgroundColor = "lightgray";
            text[i].setAttribute("disabled", "true");
            buttons[i].setAttribute("disabled", "true");
            console.log(bla)
        } else if (time[i] == moment().hour()) {
            var bla = document.getElementsByClassName(`${time[i]}`);
            bla[0].style.backgroundColor = "lightgreen";
            console.log(bla)
        }
    }

}

colorChange();