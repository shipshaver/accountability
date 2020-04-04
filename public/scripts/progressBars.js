console.log("Progress bar script loading..")
displayDate();
setColor();

// announce current date
function displayDate() {
    // get today
    const d = new Date();
    const n = d.getDay();
    let dateDisplay = document.getElementById("date");
    //dateDisplay.appendChild(document.createTextNode("Today it is day " + n + " of the week"));
    dateDisplay.appendChild(document.createTextNode("Today it is " + d));
}

// start bar with color depending on progress
function setColor() {
    let step = 0;
    let bars = document.getElementsByClassName("progress");
    for (let i = 0; i < bars.length; i++) {
    // delay color animation to start midway
    //progress.setAttribute("animation-delay", -step + "s");
        console.log(bars[i]);
        bars[i].style.backgroundColor = "hsl("+step+",100%,50%)";
    }
}
