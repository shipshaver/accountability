console.log("Progress bar script loading..")
const d = new Date(); // get today

startTime();
setColor();

document.getElementById("start").setAttribute("href","/streaks/"+dataDate(d));

// announce current date and time
function startTime() {
    let d = new Date(); // update date
    /*
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    dateTime = "Today it is " + d.toDateString() + " " + h + ":" + m + ":" + s;*/

    let dateDisplay = document.getElementById("date");
    dateDisplay.innerHTML = d;
    t = setTimeout('startTime()', 500);
}

/*
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}*/

// start bar with color depending on progress
function setColor() {
    let step = 80;
    let bars = document.getElementsByClassName("progress");
    for (let i = 0; i < bars.length; i++) {
    // delay color animation to start midway
    //progress.setAttribute("animation-delay", -step + "s");
        console.log(bars[i]);
        bars[i].style.backgroundColor = "hsl("+step+",80%,50%)";
    }
}

function dataDate(d) {
    return d.toISOString().replace('T',' ').replace('Z',''); // convert date ISO to SQLite datetime format
}
