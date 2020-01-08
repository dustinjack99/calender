const timeSlot = document.querySelector(".timeslot");
const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]


for (i = 0; i < hours.length; i++) {
    let div = document.createElement("div");
    let save = document.createElement("button");
    let input = document.createElement("textarea");
    timeSlot.appendChild(div);
    div.innerText = hours[i];
    div.setAttribute("class", "hour");
    save.innerText = "Save";
    save.setAttribute("value", hours[i]);
    div.appendChild(input)
    div.appendChild(save);
    let fetch = JSON.parse(localStorage.getItem(hours[i]));
    if (fetch === null) fetch = [];
    console.log(fetch)
}

// let hourList = document.querySelectorAll(".hour");
// console.log(hourList)

// document.addEventListener('click', function(e) {
//     let a = e.target.value
//         console.log(a);

// })
