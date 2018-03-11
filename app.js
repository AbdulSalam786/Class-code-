

var min = 0;
var sec = 0;
var millsec = 0;

var timer;

function calltimer(){
    millsec++
    if (millsec < 100) {
        if (millsec === 99){
            millsec = 0;
            sec++ 
            if (sec === 60 ){
                sec = 0;
                min++
            }
        }
    }
    else {
        millsec = 0;
    }
    document.getElementById('timer').innerHTML = min + ":" + sec + ":" + millsec;
}

function start(){
    timer = setInterval(calltimer,1000)
}

