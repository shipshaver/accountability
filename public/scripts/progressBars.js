console.log("Progress bar script loading..")
const d = new Date(); // get today

displayDate();
setColor();

document.getElementById("start").setAttribute("href","/streaks/"+dataDate(d));

// announce current date
function displayDate() {
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

function dataDate(d) {
    return d.toISOString().replace('T',' ').replace('Z',''); // convert date ISO to SQLite datetime format
}
