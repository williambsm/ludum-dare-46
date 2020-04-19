var run_script = 10;
var script_ran = 0;

function sendRace(racer) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.street-racerz.com/streets.php?race=12_" + racer, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }
    };
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("gta=3&attempt=Attempt GTA&gta_2=true");
}

function getFuel() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.street-racerz.com/fuel_stat.php", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }
    };
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("buy_max=Buy Max");
}


var start_app = setInterval(function(){
    if( script_ran >= run_script){
        clearInterval(start_app);
        console.log("App finsihed");
    }

    var i = 1;
    while(i <= 5){
        sendRace(i);
        if(i == 4){
            setTimeout(function(){
                getFuel();
            }, 300);
        }
        i++;
    }
    script_ran++;
    console.log("script ran: "+script_ran);

}, 210000);

var i = 1;
while(i <= 5){
    sendRace(i);
    if(i == 4){
        setTimeout(function(){
            getFuel();
        }, 300);
    }
    i++;
}
script_ran++;
console.log("script ran: "+script_ran);
