

const button1 = document.querySelector("#button1");
button1.addEventListener("click", e=>{
    console.log("button1 clicked");
    // alert("meh-eh-eh-eh");
    let audio = new Audio('https://www.fesliyanstudios.com/play-mp3/6539');
    audio.play();
});


const button2 = document.querySelector("#button2");
button2.addEventListener("click", e=>{
    console.log("button2 clicked");
    const status2 =document.querySelector("#status2");
    console.log(status2);
    status2.innerHTML = "Thanks for petting the bunny! He looks really happy!";

});

let carrots =2;

const button3 = document.querySelector("#button3");
button3.addEventListener("click", e=>{
    console.log("button3 clicked");
    carrots+=1;
    const status3 = document.querySelector("#status3");
    status3.innerHTML = "Coco has had " + carrots + " carrots today!";
});



const button4 = document.querySelector("#button4");
button4.addEventListener("click", e=>{
    console.log("button4 clicked");
    if (confirm("Are you SURE !?") == true) {
        const zoo = document.querySelector(".container");
        console.log(zoo);
        zoo.innerHTML =
            '<h1 class="title">Due to some dangerous rulebreaking, the petting zoo in temporarily closed</h1>'+
            '<h1>We will reopen in <span id="time"></span> seconds!</h1>' ;
        startTimer(10, document.querySelector('#time'));
    } else {

    }


});



function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59

            start = Date.now() + 1000;
            location.reload();

        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

//getComputedStyle(element).getPropertyValue('width');
// window.getComputedStyle(element).getPropertyValue('width');


// var width = 0;
function update(idname) {
    var width = document.getElementById(idname).textContent;
    console.log(width);
    width = parseFloat(width);
    console.log(width);

    width+=10;

    if (width > 100) {
        width=0;
    }

    document.getElementById(idname).style.width = width + '%';
    document.getElementById(idname).innerHTML = width * 1 + '%';
}

function reduce(idname) {
    var width = document.getElementById(idname).textContent;
    console.log(width);
    width = parseFloat(width);
    console.log(width);

    width-=10;

    if (width < 0) {
        width=0;
    }

    document.getElementById(idname).style.width = width + '%';
    document.getElementById(idname).innerHTML = width * 1 + '%';
}

