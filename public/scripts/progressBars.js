console.log("Progress bar script loading..")
displayDate();
setColor();

// show current date
function displayDate() {
    // get today
    const d = new Date();
    const n = d.getDay();
    let dateDisplay = document.getElementById("date");
    dateDisplay.appendChild(document.createTextNode("Day" + n + "of the week"));
}

// start bar with color depending on progress
function setColor() {
    let step = 0;
    let progress = document.getElementById("progress");
    // delay color animation to start midway
    progress.setAttribute("animation-delay", -step);
}
